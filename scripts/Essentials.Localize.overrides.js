/* CommonLib/lib/INC_jsDataValidation.js */

function validateAmount(source, arguments) {
	// Please enter a numeric amount.
	if (!numericCheck(arguments.Value, 2, "Veuillez entrer un montant valide.")) arguments.IsValid = false;
}
function specialCharCheck(val, msg) {
	var nrl = val;
	var flag = 0;
	var alphaErrorMsg = msg;
	if (val == "") return false;
	if (alphaErrorMsg == null) {
		// This entry accepts only letters, periods, commas and hyphens.
		alphaErrorMsg = "Cette entr\u00E9e accepte seulement des lettres, des p\u00E9riodes, des virgules, des traits d'union et des espaces.";
	}
	for (var i=0; i<nrl.length; i++) {
		cmp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()+?:.,-_";
		cmp += " ";
		tst = nrl.substring(i,i+1);
		if (cmp.indexOf(tst)<0) flag++;
	}
	if (flag != 0) {
		if (alphaErrorMsg != "nomsg") alert(alphaErrorMsg);
		return false;
	}
	return true;
}
function alphaCheck(val, msg) {
	var nrl = val;
	var flag = 0;
	var alphaErrorMsg = msg;

	if (val == "") return false;
	// This entry accepts only letters, periods, commas, hyphens and spaces.
	if (alphaErrorMsg == null) alphaErrorMsg = "Cette entr\u00E9e accepte seulement des lettres, des p\u00E9riodes, des virgules, des traits d'union et des espaces.";

	for (var i=0; i<nrl.length; i++) {
		cmp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,-";
		cmp += " ";
		tst = nrl.substring(i,i+1);
		if (cmp.indexOf(tst)<0) flag++;
	}
	if (flag != 0) {
		if (alphaErrorMsg != "nomsg") alert(alphaErrorMsg);
		return false;
	}
	return true;
}
function validAlpha(val, typeCheck, msg) {
	var tempVal = val;
	var Errormsg = msg;
	var flag = 0;
	switch (typeCheck) {
		case 1:  //alpha + , . -, for names ect.
			cmp="ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz,.'";
			break;
		case 2: //alpha, numeric, + ,.-# , for addresses
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz0123456789.,#'";
			break;
		case 3: //alpha, numeric, + ,.-# , for username and password, no " or '
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz0123456789.$#%*=+()@";
			break;
		case 4: //I am not sure when this was added but it is not correct for username or passwords -svp
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz0123456789.$#%*/=+()@\\\"_";
			break;
		case 6: //alpha, numeric 
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			break;
		case 7: //alpha, numeric, + ,.-#
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-abcdefghijklmnopqrstuvwxyz0123456789.$#%*=+()@_";
			break;
		default:
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz,.'";
			break;
	}
	// You have entered an invalid character in this field.
	if (Errormsg == null) Errormsg = "Vous avez entr\u00E9 un caractère inadmissible dans ce champ.";
	for (var i=0; i<tempVal.length; i++) {
		test = tempVal.substring(i, i+1);
		if (cmp.indexOf(test)<0) flag = -1;
	}
	if (flag != 0) {
		if (Errormsg != "nomsg") alert(Errormsg);
		return false;
	}
	return true;
}
function numericCheck(val, type, msg) {
	var nr1 = val;
	var typeCheck = type;
	var flag = 0;
	var numberErrorMsg = msg;
	if (val == "") return false;
	// This entry must be a number.  Please remove all letters, special characters, and spaces.
	if (numberErrorMsg == null) numberErrorMsg = "Cette entr\u00E9e doit être un nombre. Veuillez enlever tous les lettres, caractères sp\u00E9ciaux, et espaces.";
	switch (typeCheck) {
		case 0: //int
			cmp = "-0123456789";
			break;
		case 1: //int + commas
			cmp="-0123456789,";
			break;
		case 2: //float
			cmp = "-0123456789.,";
			break;
		case 3: //currency
			cmp = "0123456789.,$-";
			break;
		case 4: //int + point
			cmp = "-0123456789.";
			break;
		case 5: //for zip codes  
			cmp = "0123456789-";
			break;
		default:
			cmp = "-0123456789";
			break;
	}
	for (var i=0; i<nr1.length; i++) {
		tst = nr1.substring(i,i+1);
		if ((cmp.indexOf(tst)<0) || (cmp.indexOf(" ") != -1)) flag++;
		if (i>0 && tst=='-') flag++;
	}
	if (flag != 0) {
		if (numberErrorMsg != "nomsg") alert(numberErrorMsg);
		return false;
	}
	return true;
}
function validDate(val, textBox, msg, msg2) {
	var dateErrorMsg = msg;
	var spaceErrorMsg = msg2;
	var indate = val;
	var flag = 0;
	if (indate == "") return false;
	// You have entered an invalid date or date format.  Please use the MM/DD/YYYY format without spaces.
	if (dateErrorMsg == null) dateErrorMsg = "Vous avez entr\u00E9 un format de date invalide.  S'il vous plaît utiliser le format suivant MM/JJ/AAAA";
	// Please use the MM/DD/YYYY format without spaces.
	if (spaceErrorMsg == null) spaceErrorMsg = "S.V.P. utiliserle format suivant MM/JJ/AAAA sans espace";
	if (indate.indexOf(" ")!=-1) {
		if(dateErrorMsg != "nomsg") alert(spaceErrorMsg);
		return false;
	}
	if (indate.indexOf("-")!=-1) {
		var delimeter = "-";
	}
	else if (indate.indexOf("/")!=-1) {
		var delimeter = "/";
	}
	else if (indate.indexOf(".")!=-1) {
		var delimeter = ".";
	}
	else {
		flag++;
	}
	var dateArray = indate.split(delimeter);
	if ((dateArray.length != 3) || ((dateArray[2].length != 2) && (dateArray[2].length != 4)) || (dateArray[0].length < 1) || (dateArray[0].length > 2) || (dateArray[1].length < 1) || (dateArray[1].length > 2)) {
		flag++;
	}
	else if ((numericCheck(dateArray[0], 0, dateErrorMsg)==false) || (numericCheck(dateArray[1], 0, dateErrorMsg)==false) || (numericCheck(dateArray[2], 0, dateErrorMsg)==false)){
		return false;
	}
	var intYear = parseInt(dateArray[2], 10);
	if ((intYear >= 0) & (intYear <= 29)) {
		dateArray[2] = 2000 + intYear;
	}
	else if ((intYear >= 30) & (intYear <= 99)) {
		dateArray[2] = 1900 + intYear;
	}
	if (isDate(dateArray[2], dateArray[0], dateArray[1])==false) {
		flag++;
	}
	if (flag != 0) {
		if (dateErrorMsg != "nomsg") alert(dateErrorMsg);
		return false;
	}
	if ((dateArray[2] > 99) & (dateArray[2] < 1753)) {
		// We do not support dates before 1753.  Please choose a later year and try again.
		if (dateErrorMsg != "nomsg") alert("Nous n'acceptons  pas de date avant 1753.  S.V.P. choisir une ann\u00E9e ult\u00E9rieure. ");
		return false;
	}
	indate = dateArray[0] + "/" + dateArray[1] + "/" + dateArray[2];
	textBox.value = indate;  // Set the date in the form to the modified date.
	return true;
}
function validAreaCode(val, msg) {
	var tempVal = val;
	var Errormsg = msg;
	var flag = 0;
	var tempComp = "0123456789";
	if (val == "") return false;
	// You have entered an invalid 'Area Code',Please try again.
	if (Errormsg == null) Errormsg = "Vous avez entr\u00E9 un code r\u00E9gional invalide, s'il vous plaît entrer à nouveau";
	for (var i=0; i<tempVal.length; i++) {
		tempTest = tempVal.substring(i,i+1);
		if (tempComp.indexOf(tempTest)<0 || tempComp.indexOf(" ") != -1) flag = -1;
	}
	if (tempVal.length < 3) {
		flag = -1;
	}
	else {
		for (var i=0; i<tempVal.length; i++) {
			tempTest = tempVal.substring(i,i+1);
			if (tempComp.indexOf(tempTest)<0 || tempComp.indexOf(" ") != -1) flag = -1;
		}
	}
	if (flag != 0) {
		if (Errormsg != "nomsg") alert(Errormsg);
		return false;
	}
	return true;
}
function validPhoneNum(val, msg) {
	while (val.search(" ") != -1) val = val.replace(" ", "");
	var tempVal = val;
	var Errormsg = msg;
	var flag = 0;
	var tempComp = "0123456789-";
	if (val == "") return false;
	// You have entered an invalid 'Phone Number', Please try again.
	if (Errormsg == null) Errormsg = "Vous avez entr\u00E9 un num\u00E9ro de t\u00E9l\u00E9phone invalide.";
	for (var i; i<tempVal.length; i++) {
		tempTest = tempVal.substring(i,i+1);
		if (tempComp.indexOf(tempTest)<0 || tempComp.indexOf(" ") != -1) flag = -1;
	}
	if (tempVal.indexOf("-") != -1) {
		if (tempVal.length != 8) {
			flag = -1;
		}
		else {
			for (var j=0; j<tempVal.length; j++) {
				tempTest = tempVal.substring(j,j+1);
				if (tempComp.indexOf(tempTest)<0 || tempComp.indexOf(" ") != -1) flag = -1;
			}
		}
	}
	else if (tempVal.length != 7) {
		flag = -1;
	}
	else {
		for (var j=0; j<tempVal.length; j++) {
			tempTest = tempVal.substring(j,j+1);
			if (tempComp.indexOf(tempTest)<0 || tempComp.indexOf(" ") != -1) flag = -1;
		}
	}
	if (flag != 0) {
		if (Errormsg != "nomsg") alert(Errormsg);
		return false;
	}
	return true;
}
function validPhone(val, msg) {
	while (val.search(" ") != -1) val = val.replace(" ", "");
	val = val.replace("", "")
	var phone = val;
	var flag = 0;
	var phoneErrorMsg = msg;
	if (phone == "") return false;
	// You have entered an invalid phone #.  Please re-enter your # in the form xxx-xxx-xxxx.
	if (phoneErrorMsg == null) phoneErrorMsg = "Vous avez entr\u00E9 un num\u00E9ro de t\u00E9l\u00E9phone invalide.  S'il vous plaît, veuillez utiliser le format suivant xxx-xxx-xxxx";
	if (phone.indexOf(" ") != -1){
		// Please re-enter your phone # without using spaces.
		alert("S.V.P. veuillez entrer de nouveau un num\u00E9ro de t\u00E9l\u00E9phone sans utillisant des espaces.");
		return false;
	}
	if (phone.length < 10) {
		flag++;
	}
	else {
		for (var i=0; i<phone.length; i++) {
			var cmp="0123456789()-.";
			tst=phone.substring(i,i+1);
			if (cmp.indexOf(tst)<0) {
				flag++;
				break;
			}
		}
	}
	if (flag > 0) {
		if (phoneErrorMsg != "nomsg") alert(phoneErrorMsg);
		return false;
	}
	return true;
}
function validEmailOld(val, msg) {
	var email = val;
	var flag = 0;
	var emailErrorMsg = msg;
	if (email == "") return false;
	// You have entered an invalid email address.
	if (emailErrorMsg == null) emailErrorMsg = "L'adresse \u00E9lectronique entr\u00E9e n'est pas valide.";
	if (email.indexOf('@', 0) == -1) {
		flag++;
	}
	else if (email.indexOf('.', 0) == -1) {
		flag++;
	}
	if (flag > 0) {
		if (emailErrorMsg != "nomsg") alert(emailErrorMsg);
		return false;
	}
	return true;
}
function validEmail(str, msg) {
	var emailErrorMsg = msg;
	// Please enter a valid email address. Email addresses must include the\n@ sign and at least one period. (e.g. friendname@abc.com)
	if (emailErrorMsg == null) emailErrorMsg = "Veuillez entrer une adresse \u00E9lectronique valide. Les adresses \u00E9lectroniques doivent contenir le symbole @ et au moins un point (nomdevotreami@abc.com).";
	if (!isValidEmail(str)) {
		if (emailErrorMsg != "nomsg") alert(emailErrorMsg);
		return false;
	}
	return true;
}
function validYear(val, msg) {
	var year = val;
	var yearErrorMsg = msg;
	var flag=0;
	var checkYear = parseInt(year);
	if (year == "") return false;
	// Please enter the year in YYYY format.  ex 1990
	if (yearErrorMsg == null) yearErrorMsg = "S.V.P. veuillez entrer l'ann\u00E9e dans le format suivant AAAA. Ex 1990";
	if (year.length > 0) {
		if (year.length < 4) flag++;
	}
	if (year.length > 4) flag++;
	if (numericCheck(year, 0, "nomsg") == false) flag++;
	if (flag != 0) {
		if (yearErrorMsg != "nomsg") alert(yearErrorMsg);
		return false;
	}
	if (checkYear < 1753) {
		// Please enter a year later than 1752.
		if (yearErrorMsg != "nomsg") alert("Nous n'acceptons  pas de date avant 1753.  S.V.P. choisir une ann\u00E9e ult\u00E9rieure. ");
		return false;
	}
	return true;
}
function minLength(textBox, min, msg) {
	var min_length = min;
	var data = textBox.value;
	var minLengthErrorMsg = msg;
	if (min == null) return false;
	if (data == "") return false;
	// The "+textBox.name+" field requires at least "+min+" characters or more.
	if (minLengthErrorMsg == null) minLengthErrorMsg = "Ce champs "+textBox.name+" requiert au minimum "+min+" caractères.";
	if (textBox.value.length < min) {
		if (minLengthErrorMsg != "nomsg") alert(minLengthErrorMsg);
		return false;
	}
	return true;
}

/* CommonLib/lib/INC_formFields.js */

function checkMoney_js(point) {
	point.value = point.value.replace(/,/g, "");
	if (jsTools_strTrim(point.value) != "" ) {
		if (jsDV_isValidMoney(jsTools_strTrim(point.value)) != "-1")
			return jsDV_isValidMoney(jsTools_strTrim(point.value));
		else {
			// Please enter a valid amount.
			alert("Veuillez entrer un montant valide.");
			point.focus();
			return "";
		}
	}
	else
		return "";
}
function checkEmail_js(point) {
	if (jsTools_strTrim(point.value) != "" ) {
		if (validEmail(jsTools_strTrim(point.value),"nomsg"))
			return point.value;
		else {
			// Please enter a valid email address. Email addresses must include the @ sign and at least one period. (e.g. friendname@abc.com)
			alert("Veuillez entrer une adresse \u00E9lectronique valide. Les adresses \u00E9lectroniques doivent contenir le symbole @ et au moins un point (nomdevotreami@abc.com).");
			point.focus();
			return "";
		}
	}
	else
		return "";
}
function checkNumber_js(pointer) {
	pointer.value = jsTools_strTrim(pointer.value);
	if(pointer.value != "") {		
		if(isValidNumber(pointer.value) != "-1") {
			return isValidNumber(pointer.value);
		}
		else
			// Please enter a valid number.
			alert("Veuillez entrer un montant valide.");
			pointer.focus();
			return "";
	}
	else
		return "";
}
function checkInterZip_js(point) {
	if (jsTools_strTrim(point.value) != "" ) {
		if (isValidInterZip(jsTools_strTrim(point.value)))
			return point.value;
		else {
			// Please enter a valid zip/postal code.
			alert("S'il vous pla\u00EEt entrer un zip format correct / code postal.");
			point.focus();
			return "";
		}
	}
	else 
		return "";
}
function validAspDate(asp_year, asp_month, asp_day, val, textBox, type, msg, msg2) {
	var dateErrorMsg = msg;
	var spaceErrorMsg = msg2;
	var indate = val;
	var flag = 0;
	if (indate == "") return false;
	if (dateErrorMsg == null) {
		textBox.value = "";
		// You have entered an invalid date or date format. Please use the format MM/DD/YYYY without spaces.
		dateErrorMsg = "Vouz avez utilize une date ou un format de date invalide. Utilisez le format MM/JJ/AAAA sans espace.";
	}
	if (spaceErrorMsg == null) {
		textBox.value = "";
		// Please re-enter your date using the format MM/DD/YYYY without spaces.
		spaceErrorMsg = "S.V.P. utiliserle format suivant MM/JJ/AAAA sans espace";
	}
	if (indate.indexOf(" ")!=-1) {
		if (dateErrorMsg != "nomsg") {
			textBox.value = "";
			alert(spaceErrorMsg);
			textBox.focus();
		}
		return false;
	}	
	if (indate.indexOf("-")!=-1)
		var delimeter = "-";
	else if (indate.indexOf("/")!=-1)
		var delimeter = "/";
	else if (indate.indexOf(".")!=-1)
		var delimeter = ".";
	else
		flag++;
	var dateArray = indate.split(delimeter);
	if((dateArray.length != 3) || ((dateArray[2].length != 2) && (dateArray[2].length != 4)) ||
	(dateArray[0].length < 1) || (dateArray[0].length > 2) || (dateArray[1].length < 1) ||
	(dateArray[1].length > 2)) {
		flag++;
	}
	else if ((numericCheck(dateArray[0], 0, dateErrorMsg)==false) || (numericCheck(dateArray[1], 0, dateErrorMsg)==false) || (numericCheck(dateArray[2], 0, dateErrorMsg)==false)) {  
		return false;
	}
	var intYear = parseInt(dateArray[2], 10);
	if ((intYear >= 0) & (intYear <= 29))
		dateArray[2] = 2000 + intYear;
	else if ((intYear >= 30) & (intYear <= 99))
		dateArray[2] = 1900 + intYear;
	if (isDate(dateArray[2], dateArray[0], dateArray[1])==false)
		flag++;
	if(flag != 0) {
		if(dateErrorMsg != "nomsg") {
			alert(dateErrorMsg);
			textBox.value = "";
			textBox.focus();
		}
		return false;
	}
	if ((dateArray[2] > 99) & (dateArray[2] < 1753)) {
		if(dateErrorMsg != "nomsg") {
			textBox.value = "";
			// We do not support dates before 1753.  Please choose a later year and try again.
			alert("Nous n'acceptons  pas de date avant 1753.  S.V.P. choisir une ann\u00E9e ult\u00E9rieure. ");
			textBox.focus();
		}
		return false;
	}
	if ( type=='before' && ( (dateArray[2] > asp_year)	
	|| (dateArray[2] == asp_year && dateArray[0] > asp_month) 
	|| (dateArray[2] == asp_year && dateArray[0] == asp_month && dateArray[1] > asp_day) ) ) {
		if(dateErrorMsg != "nomsg") {
			textBox.value = "";
			// We do not support dates after today.  Please try again.
			alert("We do not support dates after today.  Please try again.");
			textBox.focus();
		}
		return false;
	}
	if ( type=='after' && ( (dateArray[2] < asp_year)	
	|| (dateArray[2] == asp_year && dateArray[0] < asp_month) 
	|| (dateArray[2] == asp_year && dateArray[0] == asp_month && dateArray[1] < asp_day) ) ) {
		if(dateErrorMsg != "nomsg") {
			textBox.value = "";
			// We do not support dates before today.  Please try again.
			alert("We do not support dates before today.  Please try again.");
			textBox.focus();
		}
		return false;
	}
	indate = dateArray[0] + "/" + dateArray[1] + "/" + dateArray[2];
	textBox.value = indate;
	return true;
}

/* Commonlib/lib/INC_jsFields.js */

function checkSegment(ptr, msg, warn, ids, num) {
	var c = 0;
	var arrid = ids.split(",");
	var idlen = arrid.length; 
	if (num > idlen) num = idlen;
	if (ptr.length!=null && ptr.length>1)
		for(var i=0; i<=idlen-1; i++)
			for (var j=0; j<ptr.length; j++)
				if ((arrid[i] == ptr[j].value) && (ptr[j].checked == true)) c++;
	else
		if (ptr.checked == true) c++;
	if (c < num){
    	if (warn != "") warn = warn+"\n- ";
    	// " item(s) from "
    	warn = warn + num + " option(s) de " + msg;
  	}
  	return warn;
}
function checkLength(ptr, maxlength) {
	if (ptr.value.length >= maxlength) {		
    	alert("Votre message doit contenir "+maxlength+" caractères ou moins");
		ptr.focus();
    	return false;
  	}
}
function checkNumber(ptr, msg) {
	ptr.value = jsDV_strTrim(ptr.value);
	if (ptr.value != "")
    	if(!numericCheck(ptr.value,0,'nomsg')) { 
    		// Please enter a valid number
        	alertText(msg, "Veuillez entrer un num\u00E9ro valide");
			ptr.select();
        	ptr.focus();
        	return false;
		}
}
function checkFloat(ptr, msg) {
	ptr.value = jsDV_strTrim(ptr.value);
	if (ptr.value != "")	
    	if (!numericCheck(ptr.value,2,'nomsg')) {
    		// Please enter a valid number
			alertText(msg, "Veuillez entrer un num\u00E9ro valide");
			ptr.select();
			ptr.focus();
			return false;
		}
}
function checkPointNumber(ptr, msg) {
	ptr.value = jsDV_strTrim(ptr.value);
	if (ptr.value != "")
    	if (!numericCheck(ptr.value,4,'nomsg')) { 
    		// Please enter a valid number
			alertText(msg, "Veuillez entrer un num\u00E9ro valide");
			ptr.select();
			ptr.focus();
			return false;
		}
}
function checkCurrency(ptr, msg) {
	var amountValue = jsDV_strTrim(ptr.value.replace(/,|\$/g,""));
	var returnValue = "";
	if (amountValue != "")
		returnValue = jsDV_isValidMoney(amountValue)
		if (returnValue == "-1") {
			// Please enter a valid currency
			alertText(msg, "Veuillez entrer une devise valide");
			ptr.value = "";
        	ptr.focus();
        	return false;
		} 
		else
			ptr.value = returnValue;
}
function checkPercentage(ptr, msg) {
	ptr.value = jsDV_strTrim(ptr.value);
	if (ptr.value != "")
    	if (!numericCheck(ptr.value,6,'nomsg')) {
    		// Please enter a valid percent number. 
			alertText(msg, "S.V.P veuillez entrer un pourcentage valide.");
			ptr.select();
        	ptr.focus();
        	return false;
		}
}
function checkAge(ptr, msg) {
	ptr.value = jsDV_strTrim(ptr.value);
	if (ptr.value != "")
		if (!numericCheck(ptr.value,0,'nomsg')) { 
			// Please enter a valid age.
        	alertText(msg, "Veuillez entrer un âge valide.");
			ptr.value = "";
			ptr.focus();
			return false; 
		}   
}
function checkZip(ptr, msg) {
	ptr.value = jsDV_strTrim(ptr.value);
	if (ptr.value != "") {
		var flag = 0;
		strchar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -";
		for (var i=0; i<ptr.value.length; i++) {
			tst = ptr.value.substring(i,i+1);
    		if (strchar.indexOf(tst)<0)	flag++;
		}
		if (flag != 0) {
			// Please enter a valid zip/postal code.
        	alertText(msg, "S.V.P veuillez entrer un code postal valide.");
			ptr.select();
        	ptr.focus();
        	return false; 
		}
	}
}
function checkCountryZip(zipptr, ctrptr, msg) {
	var zip = "";
	var formatzip = "";
	var country = "";
	var flag = 0;
	var i;
	var err;
	zip = zipptr.value;
	for (i=0; i<ctrptr.length; i++)
		if (ctrptr[i].selected == true) country = ctrptr[i].value;
	if ((zip != "") && (country == "CA")) {
		var strchar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var strint = "0123456789";
		for(i=0; i<zip.length; i++){
			tst = zip.substring(i,i+1);
			switch(i) {
				case 0:
				case 2:
				case 5:
					if (strchar.indexOf(tst)<0) flag++;
					break;
				case 1:
				case 4:
				case 6:
					if (strint.indexOf(tst)<0) flag++;	
					break;
				case 3:
					if(tst == "-") tst = " ";
					if(tst != " ") flag++;
					break;
				default:
					if(i>6) flag++;
					break;
			}
			formatzip = formatzip + tst;
			// Canadian postal code format is incorrect. Correct format is\nLDL DLD\nwhere L=letter, D=digit, and the space in the middle is required.
			err = "Le format canadien des codes postaux est incorrect. Veuillez corriger le format LCL CLC  L=lettre et C=chiffre.";
		}
	}
	else {
		formatzip = zip;
		if (msg != null && msg != "") err = msg;
		// Please enter a correct format zip/postal code
		else err = "S.V.P veuillez entrer un code postal valide.";
	}
	if (flag != 0) {
        alert(err);
        return false; 
	}
	else {
		zipptr.value = formatzip.toUpperCase();
		return true;
	}
}
function checkFormLoginName(thisform, msg1, msg2, msg3) {
	if (thisform.LoginName != null && thisform.Password != null && thisform.VerifyPassword != null) {
		if (thisform.Password.value.length < 5) {
			// Your password is less than 5 characters - please reenter
			alertText(msg1, "Le mot de passe doit contenir au moins 5 caractères veuillez essayer de nouveau");
			return false;
		}
		if (thisform.Password.value != thisform.VerifyPassword.value) {
			// Your passwords do not match - please reenter
			alertText(msg2, "Vos mots de passe ne concordent pas veuillez essayer de nouveau");
			return false;
		}
		if (thisform.Password.value == thisform.LoginName.value) {
			// Your password cannot be the same as your login name
			alertText(msg3, "Votre mot de passe ne peut pas être identique à votre nom d'utilisateur");
			return false;
		}
	}
	return true;
}