<?php
/**
 * api.php
 *
 * @author hp.buniat
 * @version   $Id:  $
 */

/**
 * create api.js for jQuery-Lint, based on http://api.jquery.com/api/
 */

class Api_Parser {

    /**
     * XML from URL
     *
     * @var string
     */
    private $_sContent;

    /**
     * Load the Content of a url
     *
     * @param  string $sUrl
     *
     * @return Api_Parser
     */
    public function load($sUrl) {
        $aContextOptions = array(
            'http' => array(
                'method' => "GET"
            )
        );
        $rStreamContext = stream_context_create($aContextOptions);

        if (($this->_sContent = file_get_contents($sUrl, false, $rStreamContext)) === false) {
            throw new Exception('ERROR WHILE READING');
        }

        return $this->_parse();
    }

    /**
     * Get the content
     *
     * @return string
     */
    public function get() {
        return $this->_sContent;
    }

    /**
     * Parse the docs
     *
     * @return Api_Parser
     */
    private function _parse() {
        $oXml = simplexml_load_string($this->_sContent);
        $oEntries = $oXml->xpath('/api/entries/*');

        $aResult = array();
        foreach ($oEntries as $oEntry) {
            $aElement = array();
            $oSignatures = $oEntry->xpath('signature');
            foreach ($oSignatures as $oSignature) {
                $oArguments = $oSignature->xpath('argument');
                $aArgs = array();
                foreach ($oArguments as $oArgument) {
                    $aArg = array();
                    $aAttributes = $oArgument->attributes();
                    foreach ($aAttributes as $oAttribute) {
                        $aArg[$oAttribute->getName()] = (string) $oAttribute === "true" ? true : (string) $oAttribute;
                    }

                    if (empty($aArg) !== true) {
                        $aArgs[] = $aArg;
                    }

                    unset($aArg, $aAttributes);
                }

                $aNew = array(
                    'added' => (string) $oSignature->added
                );
                if (empty($aArgs) !== true) {
                    $aNew['arg'] = $aArgs;
                }

                $aElement[] = $aNew;
                unset($oArguments, $aArgs, $aNew);
            }

            // check for multiple args and special names
            $aArgs = $aArg = array();
            foreach ($aElement as &$aArgs) {
                if (empty($aArgs['arg']) !== true) {
                    $sName = '';
                    foreach ($aArgs['arg'] as &$aArg) {
                        if ($aArg['name'] === $sName) {
                            $aArg['multiple'] = true;
                        }
                        elseif ($aArg['name'] === 'collection' and $aArg['type'] === 'Object') {
                            $aArg['type'] = 'Object, Array';
                        }
                        elseif ($aArg['name'] === 'target' and $aArg['type'] === 'Object') {
                            $aArg['type'] = 'Object, Function';
                            $aArg['multiple'] = true;
                        }

                        $sName = $aArg['name'];
                    }
                }
            }

            unset($aArgs, $aArg);
            $aAttributes = $oEntry->attributes();
            if (isset($aResult[(string) $aAttributes->name])) {
                $aResult[(string) $aAttributes->name] = array_merge($aResult[(string) $aAttributes->name], $aElement);
            }
            else {
                $aResult[(string) $aAttributes->name] = $aElement;
            }

            unset($aElement, $aAttributes, $oSignatures);
        }

        foreach ($aResult as &$aEntry) {
            usort($aEntry, array($this, '_sort'));
        }

        $this->_sContent = json_encode($aResult);
        return $this;
    }

    /**
     * Sort Api-Entries by added ASC
     *
     * @param  array $a
     * @param  array $b
     *
     * @return int
     */
    private function _sort($a, $b) {
        if ($a['added'] == $b['added']) {
            return 0;
        }

        return ((float)$a['added'] > (float)$b['added']) ? 1 : -1;
    }
}

$sContent = '';
$o = new Api_Parser();
try {
    $sContent = $o->load('http://api.jquery.com/api/')->get();
}
catch (Exception $e) {
    print_r($e);
}

print preg_replace('/(\{|,)"(?!default|class)([a-z]+?)":/i', '$1$2:', $sContent);