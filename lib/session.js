set = function(sessionName, obj, prop){
	var sessionObj = Session.get(sessionName) || {};

	if(prop || prop === 0){
		sessionObj[prop] = obj;
		Session.set(sessionName, sessionObj);
	}else{
		Session.set(sessionName, obj);
	}
};

reset = function(sessionName, obj, prop){
	unset(sessionName, prop)
	set(sessionName, obj, prop)
};

unset = function(sessionName, prop){
	var sessionObj = Session.get(sessionName);
	if(!sessionObj) return; //unexisting session

	if(prop || prop === 0){
		delete sessionObj[prop];
		Session.set(sessionName, sessionObj);
	}else{
		Session.set(sessionName, null);
	}
};

get = function(sessionName, prop){
	var sessionObj = Session.get(sessionName);

	if(sessionObj && (prop || prop === 0)){
		return sessionObj[prop];
	}

	return sessionObj;
};