CliLog [![Build Status](https://travis-ci.org/devWayne/CliLog.svg?branch=master)](https://travis-ci.org/devWayne/CliLog)
============
> CliLog 

##Usage

```
log=require('clilog');

log.info('msg');
```

##API

#### log.print(msgType,String)   

```
msgType:{
	Error: 0,
	Warn: 1,
	Info: 2,
	Debug: 3
}
```
#### log.info(String)

#### log.debug(String)

#### log.warn(String)

#### log.error(String)
