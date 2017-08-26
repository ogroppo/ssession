set = (sessionName, obj, prop) => {
	var sessionObj = Session.get(sessionName) || {}

	if(prop === undefined){
		Session.set(sessionName, obj)
	}else{
		sessionObj[prop] = obj
		Session.set(sessionName, sessionObj)
	}
}

reset = (sessionName, obj, prop) => {
	unset(sessionName, prop)
	set(sessionName, obj, prop)
}

unset = (sessionName, prop) => {
	var sessionObj = Session.get(sessionName)
	if(!sessionObj) 
		return //unexisting session

	if(prop === undefined){
		Session.set(sessionName, null)
	}else{
		delete sessionObj[prop]
		Session.set(sessionName, sessionObj)
	}
}

get = (sessionName, prop) => {
	var sessionObj = Session.get(sessionName)

	if(sessionObj && prop !== undefined){
		return sessionObj[prop]
	}

	return sessionObj
}