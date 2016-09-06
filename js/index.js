define(["dojo/json","dojo/text!js/index.json","dojox/app/main"],
	function(json,config,Application){
		Application(json.parse(config));
	}
);