/*
--------------------------------------------------------------------
 Blackbaud ISD Friends Asking Friends Essentials 1:M Localizer
====================================================================
 Author(s): 	Steve Brush [SB]
 Created: 		December 5, 2012
 Version: 		2.0
 
-------------------------------------------------------------------- 
 Changelog: 
====================================================================
 mm/dd/yyyy		...
 
====================================================================
 Configuration:
-------------------------------------------------------------------- 
	See examples in Sphere Creative Account
--------------------------------------------------------------------
 
====================================================================
*/

Essentials = {


	Localize: {
	
	
		Defaults: {
			
			standard: {
				contentAll: 'body',
				contentPrimary: '#wrapContent',
				contentTertiary: 'td.FAFRightNav, #rh-col',
				contentUtility: '#wrapTopBar',
				contentFooter: '.FAFBodyTable table[class="noprint"] td.font1',
				globalTermsContainer: '#wrapTopBar, table.FAFOuterTable2, table.FAFLeftNavTable, td.FAFRightNav, #wrapFooter, #rh-col, #myHQmenu',
				pageTermsContainer: '#wrapContent, #givingOverlay'
			},
			
			essentials: {
				contentAll: 'body, #wrapPage',
				contentPrimary: '#contentPrimary',
				contentTertiary: '#contentTertiary',
				contentUtility: '#utility',
				contentFooter: '#footer',
				globalTermsContainer: '#utility, #header, #contentSecondary, #contentTertiary, #myHQmenu, #myHQsubmenu, #footer',
				pageTermsContainer: '#contentPrimary, #givingOverlay'
			},
			
			common: {
				templateType: "essentials",
				proxy: location.protocol+'//www.kinteratools.com/local/CSV2JSON/csv2json.php',
				donationPDF_en: null,
				donationPDF_fr: null,
				translation_page: null,
				translation_global: null,
				confidence_fr: null,
				logo_fr: null,
				cvvUrl_fr: null,
				overrides: null,
				cacheTerms: true
			}
			
		},
	
	
		Storage: {
		
			inputImageSRC: ['continue','submit','btn_updateSilver','searchsilver','post_message_silver','btn_next.gif'],
			imageOnClickSRC: [
				["btn_save_med" , "Save"],
				["continue_shopping" , "Continue Shopping"],
				["btn_checkout" , "Checkout"],
				["btn_update" , "Update Total"],
				["continuesilver" , "Continue"],
				["previewsilver" , "Preview"],
				["submitsilver" , "Submit"],
				["btn_updateSilver" , "Update"],
				["cancel" , "Cancel"],
				["assign_silver" , "Assign"],
				["close_silver" , "Close"],
				["preview_email_silver" , "Preview Email"],
				["btn_sendemail" , "Send Email"],
				["select.gif" , "Select this Level"],
				["updatetotal" , "Update Total"],
				["continuesponopp" , "Continue"],
				["homesilver" , "Home"],
				["post_message_silver" , "Post Message"],
				["select_silver.gif" , "Select"],
				["searchsilver.gif" , "Search"],
				["add_silver_small" , "Add"],
				["edit_silver_small" , "Edit"],
				["delete_silver_small" , "Delete"],
				["submitnew" , ""],
				["help_Button" , "Help"],
				["emailFriend" , "Email this site to a friend"],
				["faf_logo" , "Friends Asking Friends"],
				["btn_back" , "Back"],
				["btn_addmore" , "Add More Contacts"],
				["btn_sendemails" , "Send E-mails"]
			],		// Store SRC and Label values for <img onclick="" />
			translations: {
				inputButtons: [	
					["Send Email to Selected Contacts" , "Envoyer un courriel aux contacts s\u00E9lectionn\u00E9s"],
					["Process Order" , "Completer la transaction"],
					["Add to Cart" , "Ajouter au panier"],
					["Order More Items" , "Commander d'autres articles."],
					["Update Total" , "Mettre \u00E0 jour le total"],
					["Proceed to Checkout" , "Quitter"],
					["Back" , "Retour"],
					["Back to" , "Retour au"],
					["Back to National Events Calendar" , "Retour au calendrier des activit\u00E9s nationales"],
					["Cancel" , "Annuler"],
					["Continue" , "Poursuivre"],
					["Preview" , "Pr\u00E9visualiser"],
					["Add Team Member" , "Ajouter un membre d'\u00E9́quipe"],
					["Add Another Individual" , "Ajouter un autre individu"],
					["Done" , "Termin\u00E9"],
					["Process Order" , "Completer la transaction"],
					["SoumettreClick" , "SubmitClick"],
					["Enter Pledge" , "Inscrire une promesse de don"],
					["Enter New Pledge" , "Inscrire une nouvelle promesse de don"],
					["Print Report" , "Imprimer le rapport"],
					["Finish" , "Terminer"],
					["Continue Shopping" , "Poursuivre Panier"],
					["Search" , "Rechercher"],
					["Show All" , "Tout afficher"],
					["Restart" , "Recommencer"],
					["Exit" , "Quitter"],
					[" Exit " , "Quitter"],
					["Send" , "Envoyer"],
					["Close" , "Fermer"],
					["Donate" , "Poursuivre"],
					["Save" , "Poursuivre"],
					["Next" , "Suivant"],
					["Step 2 of 4" , "\u00C9tape 2 sur 4"],
					["Step 3 of 4" , "\u00C9tape 3 sur 4"],
					["Step 4 of 4" , "\u00C9tape 4 sur 4"],
					["Please enter quantity" , "Veuillez entrer une quantit\u00E9"],
					["Please enter a valid quantity" , "Veuillez entrer une quantit\u00E9 valide"],
					["Browse..." , "Recherchez"],
					["Submit" , "Soumettre"],
					["Update" , "Mise \u00E0 jour"],
					["Delete Selected Contacts" , "Supprimer les contacts s\u00E9lectionn\u00E9s"]
				],	// Store translations for various form buttons
				validations: [
					["You need to check at least one name in the list." , "Vous devez cocher au moins un nom de la liste."],
					["Check the box(es) next to the name(s) then click the 'Send Email to Selected Contacts' button." , "Cochez la(les) case(s) adjacente(s) au(x) nom(s), puis appuyez sur \u00AB Envoyer un courriel aux contacts s\u00E9lectionn\u00E9s \u00BB"],
					["The Team name you have chosen is in use. Please select another Team name." , "Le nom d'\u00E9quipe que vous avez choisi est d\u00E9j\u00E0 utilis\u00E9. Veuillez entrer un nouveau."],
					["Are you sure you want to cancel this registration process?" , "\u00CAtes-vous certain que vous voulez annuler cette inscription "],
					["Are you sure you want to delete this image/video?" , "\u00CAtes-vous certain que vous voulez supprimer cette image/vid\u00E9o ?"],
					["Please fill out a valid email" , "Veuillez entrer une adresse \u00E9lectronique valide"],
					["Please select the following items to continue:" , "Veuillez s\u00E9lectionner les \u00E9l\u00E9ments suivants pour continuer :"],
					["You have entered an invalid date or date format. Please use the format MM\DD\YYYY without spaces." , "Vouz avez utilize une date ou un format de date invalide. Utilisez le format MM/JJ/AAAA sans espace."],
					["Challenge Text" , "R\u00E9ponse de s\u00E9curit\u00E9"],
					["Please enter a numeric amount" , "Veuillez entrer un chiffre"],
					["Your email text is too long to save to the database" , "Votre texte courriel est trop long pour le sauvegarder dans la base de donn\u00E9es"],
					["Please enter the following fields to continue:" , "Veuillez remplir les champs suivants pour poursuivre:"],
					["Your username cannot contain ampersand (&) symbols." , "Votre nom d'usager ne peut contenir des symboles, tels que l'esperluette (&)."],
					["Please enter a valid username." , "Veuillez entrer un nom d'usager valide."],
					["Please enter a valid password." , "Veuillez entrer un mot de passe valide."],
					["Please enter a valid donation amount." , "Veuillez entrer un montant de don valide."],
					["Please enter a valid fundraising goal amount." , "Veuillez entrer un objectif de collecte de fonds valide."],
					["Please enter a fundraising goal amount that is greater than" , "Veuillez entrer un objectif de collecte de fonds sup\u00E9rieur \u00E0"],
					["Please choose a shirt size." , "Veuillez choisir une taille de chandail."],
					["Please enter a valid email address." , "Veuillez entrer une adresse de courriel valide."],
					["You have entered an invalid email address." , "Vous avez entr\u00E9 une adresse de courriel invalide."],
					["You have entered an invalid email address." , "Vous avez entr\u00E9 une adresse de courriel invalide."],
					["You have entered an invalid character in this field." , "Vous avez entr\u00E9 un caract\u00E8re invalide dans ce champ."],
					["Your CVV number is invalid - please reenter" , "Votre num\u00E9ro CVV est invalide - veuillez recommencer"],
					["Your password must be at least 5 characters long. Please reenter a password." , "Votre mot de passe doit contenir un minimum de cinq caract\u00E8res. Veuillez entrer de nouveau votre mot de passe."],
					["Your username and password should not match. Please select another login." , "Votre nom d'usager et mot de passe ne peuvent \u00EAtre similaires. Veuillez choisir un autre nom d'usager."],
					["Your password cannot be your first or last name. Please reenter your password." , "Votre mot de passe ne peut \u00EAtre votre pr\u00E9nom ou nom de famille. Veuillez entrer un nouveau mot de passe."],
					["Please enter a valid amount for fundraising goal." , "Veuillez entrer un montant valide pour votre objectif de collecte de fonds."],
					["Please enter a valid amount" , "Veuillez entrer un montant valide."],
					["The registration option you selected requires that you must be [18+] years old." , "Vous devez avoir 18 ans et plus pour acc\u00E9der aux options d'inscription s\u00E9lectionn\u00E9es."],
					["The password and retyped password do not match.Please reenter your password" , "Le mot de passe et la v\u00E9rification du mot de passe ne coincident pas. Veuillez inscrire de nouveau votre mot de passe."],
					["Please enter a minimum donation amount of" , "Veuillez entrer un don minimum de"],
					["Please enter keywords or price to search." , "Veuillez inscrire les mots cl\u00E9s ou le prix pour faire une recherche."],
					["Please stand by..." , "S\\'il vous pla\u00EEt se par ..."],
					["Please enter a correct format zip/postal code" , "S\\'il vous pla\u00EEt entrer un zip format correct / code postal"],
					["Your credit card is expired - please reenter" , "Votre carte de cr\u00E9dit est expir\u00E9 - s\\'il vous pla\u00EEt entrer \u00E0 nouveau"],
					["Your CVV number is invalid - please reenter" , "Votre num\u00E9ro CVV est invalide - s\\'il vous pla\u00EEt entrer \u00E0 nouveau "],
					["Please enter a valid CVV number" , "Veuillez inscrire un num\u00E9ro CVV valide"],
					["Your credit card number is invalid - please reenter" , "Votre num\u00E9ro de carte de cr\u00E9dit n'est pas valide - s\'il vous pla\u00EEt entrer \u00E0 nouveau"],
					["Please enter the following fields to continue:" , "Svp, veuillez compl\u00E9ter les renseignements demand\u00E9s dans le(s) champ(s) suivant(s) : "],
					["Please enter the special event you are commemorating." , "S.V.P. Veuillez indiquer l\\'\u00E9v\u00E9nement sp\u00E9cial que vous voulez comm\u00E9morer"],
					["Please enter a first name for your tribute." , "S.V.P. Veuillez \u00E9crire un pr\u00E9nom pour votre hommage."],
					["Please enter a last name for your tribute." , "S.V.P., Veuillez \u00E9crire un nom pour votre hommage."],
					["Please fill out the required fields" , "Veuillez remplir les champs requis"],
					["The donation amount can not contain any punctuation." , "Le montant du don ne doit contenir aucune ponctuation."],
					["Please re-enter your donation amount." , "Veuillez entrer de nouveau le montant de votre don."],
					["A $0 donation cannot be entered." , "Entrer un don de plus de 0$."],
					["You have entered an invalid character in this field." , "Vous avez entr\u00E9 un caract\u00E8re inadmissible dans ce champ."],
					["Please use the MM/DD/YYYY format without spaces." , "S.V.P. utiliserle format suivant MM/JJ/AAAA sans espace"],
					["You have entered an invalid email address." , "Vous avez entr\u00E9 une adresse courriel invalide"],
					["Please enter the year in YYYY format.  ex 1990" , "S.V.P. veuillez entrer l\\'ann\u00E9e dans le format suivant AAAA. Ex 1990"],
					["Please enter a year later than 1752." , "Nous n\\'acceptons  pas de date avant 1753.  S.V.P. choisir une ann\u00E9e ult\u00E9rieure."],
					["field requires at least" , "Le champ exige au moins"],
					["characters or more." , "caract\u00E8res ou plus."],
					["The Team you have chosen is in use. /\nPlease select another Team name." , "Le nom d'\u00E9quipe choisi existe d\u00E9j\u00E0. Veuillez s\u00E9lectionner un autre nom d'\u00E9quipe."],
					["The Team name was blank. Please enter a Team name." , "Le nom d'\u00E9quipe n'a pas \u00E9t\u00E9 inscrit. Veuillez choisir un nom d'\u00E9quipe."],
					["The team name was left blank. Please enter a Team name." , "Le nom d'\u00E9quipe n'a pas \u00E9t\u00E9 inscrit. Veuillez choisir un nom d'\u00E9quipe."],
					["The Team you have chosen is in use. Please select another Team name." , "Le nom d'\u00E9quipe choisi existe d\u00E9j\u00E0. Veuillez s\u00E9lectionner un autre nom d'\u00E9quipe."],
					["The team name chosen is in use. Please enter another Team name" , "Le nom d'\u00E9quipe choisi existe d\u00E9j\u00E0. Veuillez s\u00E9lectionner un autre nom d'\u00E9quipe."],
					["Please enter a valid fundraising goal." , "Veuillez entrer un objectif de campagne valide."],
					["Please enter a valid recruiting goal." , "Veuillez entrer un objectif de recrutement valide."],
					["Please select a Team to join from the list." , "Veuillez choisir une \u00E9quipe parmi celles \u00E9num\u00E9r\u00E9es dans la liste."],
					["This entry accepts only letters, periods, commas, hyphens and spaces." , "Cette entr\u00E9e accepte seulement des lettres, des p\u00E9riodes, des virgules, des traits d\\'union et des espaces."],
					["Please enter a donation amount greater than or equal to 5." , "S.V.P.,Veuillez entrer un montant de 5$ ou plus."],
					["This entry must be a number.  Please remove all letters, special characters, and spaces." , "Cette entr\u00E9e doit \u00EAtre un nombre. Veuillez enlever tous les lettres, caract\u00E8res sp\u00E9ciaux, et espaces."],
					["You have entered an invalid date or date format.  Please use the MM/DD/YYYY format without spaces." , "Vous avez entr\u00E9 un format de date invalide.  S\\'il vous pla\u00EEt utiliser le format suivant MM/JJ/AAAA."],
					["We do not support dates before 1753.  Please choose a later year and try again." , "Nous n\'acceptons pas de date avant 1753.  S.V.P. choisir une ann\u00E9e ult\u00E9rieure. "],
					["You have entered an invalid 'Area Code',Please try again." , "Vous avez entr\u00E9 un code r\u00E9gional invalide, s\\'il vous pla\u00EEt entrer \u00E0 nouveau."],
					["You have entered an invalid 'Phone Number', Please try again." , "Vous avez entr\u00E9 un num\u00E9ro de t\u00E9l\u00E9phone invalide.  S\\'il vous pla\u00EEt, veuillez utiliser le format suivant xxx-xxx-xxxx."],
					["You have entered an invalid phone \\#.  Please re-enter your \\# in the form xxx-xxx-xxxx." , "Vous avez entr\u00E9 un num\u00E9ro de t\u00E9l\u00E9phone invalide.  S\\'il vous pla\u00EEt, veuillez utiliser le format suivant xxx-xxx-xxxx."],
					["Please enter a valid credit card.  We accept Visa, Mastercard, Discover or American Express only." , "S.V.P.,Veuillez entrer un num\u00E9ro de carte de cr\u00E9dit valide.  Nous acceptons Visa, Master Card et American Express seulement."],
					["For credit card donations a minimum donation of $5 is required" , "Pour les cartes de cr\u00E9dit, un don minimum de 5$ est requis"],
					["Total for Range" , "Total pour cette cat\u00E9gorie"],
					["No Donations Available" , "Aucun don disponible"],
					["Please enter a first name" , "Veuillez \u00E9crire un pr\u00E9nom"],
					["formPointer.elements\\['addAmount'\\]" , "$('input[name=addAmount]')[0]"],
					["fieldname.elements\\['addAmount'\\]" , "$('input[name=addAmount]')[0]"],
					["The username you have selected is in use." , "Le nom d'utilisateur que vous avez choisi est d\u00E9j\u00E0 en usage."],
					["Please enter a new username." , "Veuillez inscrire un nouveau nom d'utilisateur."],
					["Try adding some numbers, such as janesmith99 or jane62smith." , "Essayez d'ajouter des chiffres, par exemple julietremblay99 ou julie62tremblay."],
					["You must select at least one contact from your Address Book in order to create a new group." , "Vous devez s\u00E9lectionner un minimum d'un contact de votre carnet d'adresses pour cr\u00E9er un liste de destinataires."],
					["Please enter a User Name." , "Veuillez entrer un nom d'usager."],
					["Please enter an E-mail Address." , "Veuillez entrer une adresse courriel."],
					["Please enter a Challenge Answer" , "Veuillez entrer une r\u00E9ponse Challenge"],
					["Billing Address Line 1" , "Facturation Adresse ligne 1"],
					["Billing City" , "Facturation ville"],
					["Billing Zip" , "Facturation code postal"],
					["Billing State or Billing Province" , "Facturation \u00E9tat ou province"],
					["Cardholder Name" , "Nom du d\u00E9tenteur de la carte"]
				],		// Store translations for alert messages
				provinceArr_en: ["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territory","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon Territory","Not in Canada"],
				provinceArr_fr: ["Alberta","Colombie-Britannique","Manitoba","Nouveau-Brunswick","Terre-Neuve-et-Labrador","Territoires du Nord-Ouest","Nouvelle-\u00C9cosse","Nunavut","Ontario","\u00CEle-du-Prince-\u00C9douard","Qu\u00E9bec","Saskatchewan","Yukon","Ext\u00E9rieur du Canada"],
				provinceAbbr: ["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"]
			},
			fr_terms:[],
			startTime: 0.0,
			lastTime: 0.0,
			thisTime: 0.0,
			termsLoaded: false,
			countriesLoaded: false,
			statesLoaded: false
			
		},
	
	
		Methods: {
			
			
			
			
			/* ============ */
			/*  INITIALIZE  */
			/* ============ */
			
			main: function(opts) {
				
				sessvars.$.prefs.crossDomain = true;
				
				var temp = {};
				if (opts.templateType == "essentials") {
					temp = $.extend(true, Essentials.Localize.Defaults.common, Essentials.Localize.Defaults.essentials);
				} else {
					temp = $.extend(true, Essentials.Localize.Defaults.common, Essentials.Localize.Defaults.standard);
				}
				Essentials.Localize.Options = $.extend(true, temp, opts);
				
				var l = Essentials.Localize,
					m = l.Methods,
					s = l.Storage,
					o = l.Options;
					
				var d = new Date();
				s.startTime = d.getTime();
				
				// save page href
				s.href = window.location.href.toLowerCase();
				
				// set language
				m.setLanguage(m.getLanguage());
				
				// event id
				s.ievent = (typeof fafJSONevent != "undefined") ? fafJSONevent.event.id : m.getUrlVars()['ievent'];
				
				// fix for print report popup throwing JSON error
				if (typeof fafJSONoptions == "undefined") fafJSONoptions = {};
				
			},
			
			
			
			
			/* ===================== */
			/*  GETTERS AND SETTERS  */
			/* ===================== */
			
			getLanguage: function() {
				var m = Essentials.Localize.Methods, lang;
				if (typeof m.getUrlVars()['language'] != "undefined") {
					lang = m.getUrlVars()['language'];
				} else if (sessvars.language != undefined) {
					lang = sessvars.language;
				} else if ($.cookie("language") != null) {
					lang = $.cookie("language");
				} else {
					var navLang = window.navigator.userLanguage || window.navigator.language;
					lang = navLang.split('-')[0];
				}
				return lang.replace('#','');
			},
			
			
			setLanguage: function(val) {
				sessvars.language = val;
				$.cookie("language",val);
				Essentials.Localize.Storage.language = val;
			},
			
			
			getTerms: function() {
				var s = Essentials.Localize.Storage;
				if (typeof s.fr_terms != "undefined" && s.fr_terms.length) {
					return s.fr_terms;
				} else if (sessvars.fr_terms != undefined) {
					return sessvars.fr_terms
				} else {
					return null;
				}
			},
			
			
			setTerms: function(val) {
				sessvars.fr_terms = val;
				Essentials.Localize.Storage.fr_terms = val;
			},
			
			
			getCountries: function() {
				var s = Essentials.Localize.Storage;
				if (typeof s.countries != "undefined" && s.countries.length) {
					return s.countries;
				} else if (sessvars.countries != undefined) {
					return sessvars.countries;
				} else {
					return null;
				}
			},
			
			
			setCountries: function(val) {
				sessvars.countries = val;
			},
			
			
			getStates: function() {
				var s = Essentials.Localize.Storage;
				if (typeof s.states != "undefined" && s.states.length) {
					return s.states;
				} else if (sessvars.states != undefined) {
					return sessvars.states;
				} else {
					return null;
				}
			},
			
			
			setStates: function(val) {
				sessvars.states = val;
			},
			
			
			
			
			/* =========== */
			/*  PAGE PREP  */
			/* =========== */
			
			assignContainers: function() {
				var o = Essentials.Localize.Options;
				o.contentAll = $(o.contentAll);
				o.contentPrimary = $(o.contentPrimary);
				if (!o.contentPrimary.length) {
					o.contentPrimary = o.contentAll;
				}
				o.contentTertiary = $(o.contentTertiary);
				o.contentUtility = $(o.contentUtility);
				o.contentFooter = $(o.contentFooter);
			},
			
			
			sabotageTherm: function() {
				// change class on therm raised amount to prevent essentials from messing with the currency
				var fundbar = $('#fundbar');
				if (fundbar.length)
					fundbar.find('.fundbarRaised .fundValue').removeClass('fundValue').addClass('localFundValue');
			},
			
			
			initLoader: function() {
				var s = Essentials.Localize.Storage,
					html = '<div id="progressLoaderWrap" style="display:none;"><div id="progressLoader"><div id="progressLoaderMeter"></div><div id="progressLoaderTitle">Chargement...</div></div></div>';
					
				$(html).prependTo($('body'));
				s.loaderWrap = $('#progressLoaderWrap');
			},
			
			
			hideLoader: function() {
				Essentials.Localize.Storage.loaderWrap.hide();
			},
			
			
			showLoader: function() {
				Essentials.Localize.Storage.loaderWrap.show();
			},
			
			
			hidePage: function() {
				Essentials.Localize.Options.contentAll.css('visibility','hidden');
			},
			
			
			showPage: function() {
			
				var o = Essentials.Localize.Options,
					m = Essentials.Localize.Methods;
			
				o.contentAll.css('visibility','visible');
				
				if (!m.urlContains('/faf/donorReg/donorPledge.asp') && !m.urlContains('/faf/search/searchTeamPart.asp')) {
					o.contentPrimary.find('.FAFBodyTable').css('visibility','visible').show();
				} else {
					o.contentPrimary.find('.FAFBodyTable').hide();
				}
				
			},
			
			
			createLanguageMenu: function() {
				
				var m = Essentials.Localize.Methods,
					language = Essentials.Localize.Storage.language,
					html = '<div class="languageMenu"><ul class="menu topNav"><li class="local-setEnglish"><a href="#">English</a></li><li class="local-setFrench"><a href="#">Fran&#231;ais</a></li></ul></div>',
					utility = Essentials.Localize.Options.contentUtility;
					
				utility.find('> div:eq(0)').prepend(html);
				
				utility.find('.local-setEnglish').click(function() {
					m.setLanguage('en');
					window.location.reload();
				});
		
				utility.find('.local-setFrench').click(function() {
					m.setLanguage('fr');
					window.location.reload();
				});
				
				// Add class to BODY and Language Links:
				switch (language) {
					case "fr":
						$('body').addClass("local-fr");
						utility.find('.local-setFrench').addClass('selected');
						break;
					case "en":
					default:
						$('body').addClass("local-en");
						utility.find('.local-setEnglish').addClass('selected');
						break;				
				}
				
			},
			
			
			filterLanguageContent: function() {
				var language = Essentials.Localize.Storage.language,
					contentAll = Essentials.Localize.Options.contentAll;
				// Remove all elements with tag "local" where its not equal to the selected language
				contentAll.find('[local="'+language+'"]').show();
				contentAll.find('[local]:not([local='+language+'])').remove();
			},
			
			
			protectElements: function() {
			
				var urlContains = Essentials.Localize.Methods.urlContains,
					contentPrimary = Essentials.Localize.Options.contentPrimary,
					contentTertiary = Essentials.Localize.Options.contentTertiary,
					noTransClass = 'no-trans';
			
				// Add classes to objects that shouldn't be translated:
				// ----------------------------------------------------
				
				contentTertiary.find('.leaderboardMenu a, .personalPageTitle, .personalPageSubtitle').addClass(noTransClass);
				
				if (urlContains('/faf/teamReg/captainTeamReport.asp')) {
					contentPrimary.find('table tr[bgcolor] td:first font:contains("No")').addClass(noTransClass);
				}
				
				else if (urlContains('/faf/login/partMenu.asp')) {
					var welcome = contentPrimary.find('b:contains("Welcome")');
					var welcomeText = 'Welcome, <span class="'+noTransClass+'">'+welcome.html().split(',')[1]+'</span>';
					welcome.html(welcomeText);
				}
				
				else if (urlContains('/faf/emailCenter/email.asp')) {
					contentPrimary.find('form[name="emailForm"] table table tr:nth-child(3) td:nth-child(2)').addClass(noTransClass);
					contentPrimary.find('select[name="template"] option').each(function() {
						if ($(this).text() != "Blank") $(this).addClass(noTransClass);
					});
				}
				
				else if (urlContains('/faf/emailImport/Setup_default.asp?Mode=Step3')) {
				
					// Don't translate selects!
					contentPrimary.find('select[name="FirstName"] option').each(function(i) {
						if (i) $(this).addClass(noTransClass);
					});
					contentPrimary.find('select[name="LastName"] option').each(function(i) {
						if (i) $(this).addClass(noTransClass);
					});
					contentPrimary.find('select[name="EmailAddress"] option').each(function(i) {
						if (i) $(this).addClass(noTransClass);
					});
				}
				
				else if (urlContains('/faf/emailCenter/emailAddressbook.asp')) {
					setTimeout(function(){
						contentPrimary.find('#Table2 tr').each(function() {
							if ($(this).find('input[type="checkbox"]').length) {
								$(this).find('td:eq(2)').addClass(noTransClass);
							}
						});
					},50);
				}
			},
			
			
			cleanup: {
			
			
				pages: function() {

					var l = Essentials.Localize,
						s = l.Storage,
						o = l.Options,
						m = l.Methods,
						contentPrimary = o.contentPrimary,
						urlContains = m.urlContains;
				
					/*
					==============
					 Registration
					==============
					*/
					
					if (urlContains('/faf/r/register.asp')) {
						// Clean out password fields on reg form
						contentPrimary.find('input[name="LoginName"],input[type="password"]').val('');
					}
					
					else if (urlContains('/faf/reg_new/register.asp')) {
						// Fix personal page friendly link message
						contentPrimary.find('td[colspan="3"]:contains("If you would like a personalized")').html("<p>If you would like a personalized link for your web page, you must create it now.</p><p>NOTE: This link cannot be edited later.</p>");
					}
					
					else if (urlContains('/faf/teams/registerTeam.asp') || urlContains('/faf/r/selectRegType.asp')) {
						// Fix team fundraising goal
						contentPrimary.find('input[name="teamFormFundraisingGoal"]').closest('tr').find('td:contains("Team")').text('Team Fundraising Goal');
					}
					
					
					/* 
					=======
					 My HQ
					=======
					*/
					
					else if (urlContains('/faf/login/partMenu.asp')) {
						// correct text on email link:
						$('#myHQbody').find('a:contains("Offline")').text("Enter Offline Donations");
					}
					
					else if (urlContains('/FAF/login/teamPageEdit.asp')) {
						// Edit Team Page
						contentPrimary.find('select[name="teampage_theme"]').hide().closest('td').find(':not(input,textarea,br,img)').andSelf().contents().each(function() {
							if (this.nodeType == 3) {
								$(this).wrap('<span class="content" />');
							}
						});
						contentPrimary.find('b:contains("Choose a theme")').hide();
						contentPrimary.find('.content:contains("Customize your page")').hide();
						contentPrimary.find('font:contains("Fundraising Goal")').html('Team Fundraising Goal:');
						contentPrimary.find('td.white b:contains("Members")').html('Team Members');
					}
					
					else if (urlContains('/faf/login/participantStats.asp')) {
						// Update styles for reports page
						if (!urlContains('&getFrom=print')) { // not print view
						
							var select = contentPrimary.find('select#__pagesize').css({'float':'none','margin':'0 4px 0 0'}),
								selectHTML = select.outerHTML(),
								container = select.parent();
							
							select.remove();
							
							var paginatorHTML = container.html().split(','),
								firstBit = paginatorHTML[0],
								secondBit = paginatorHTML[1];
							
							container.html(firstBit + ', <br />'+selectHTML+' '+secondBit);
							contentPrimary.find('font[style="BACKGROUND-COLOR:#ccddee"]').css('margin','0 6px 0 8px').css('padding','0 3px');
							contentPrimary.find('a:contains("Export\u00A0XLS")').text("Export XLS");
							contentPrimary.find('a:contains("Choose\u00A0Columns")').text("Choose Columns").addClass('newPopup');
							
						}
						$('h4').text("Donation Statistics");
					}
					
					else if (urlContains('/faf/emailCenter/email.asp')) {
						// email tools
						contentPrimary.find('h4').text("Email Center");
						contentPrimary.find('td[colspan="5"]:contains("(c)common template")').text('(c)common template (p)private template');
						contentPrimary.find('p:contains("Compose your email here and send it off to your")').text('Compose your email here and send it off to your current/potential donors. Create your own email message or select a template.');
					}
					
					else if (urlContains('/faf/includes/INC_reminderWindow.asp')) {
						// Hide popup after user saves changes to My Personal Page
						window.close();
					}
					
					else if (urlContains('/faf/email/emailLog.asp')) {					
						// Email History Log
						var bustedContainer = contentPrimary.find('h4').closest('td').html('<br /><center><h4>Email History Log</h4></center><p><span>Use this email log to check who you have sent email to and how they have responded.</span>&nbsp;&nbsp;<span>To re-send emails to individuals, check the box next to their names and click the link at the bottom.</span></p><p>Click <a onclick="updateLog();" href="#">Update Log</a> to view the most recent email log information.</p>');
						formPointer = document.emailLogForm; // Reset the FAF formPointer variable
						var bgcolor = contentPrimary.find('#Table3 tr tr[bgcolor]:eq(0)').attr('bgcolor');
						contentPrimary.find('#Table3 tr tr[bgcolor]:eq(0) td').css('background',bgcolor);
						contentPrimary.find('.titleHeader').css('color','#fff');
					}
					
					else if (urlContains('/faf/emailCenter/emailAddressbook.asp')) {
						// Fix button widths on Address Book popup, add .no-trans
						$('input.HtmlButton').css({
							'width':'auto',
							'float':'left'
						});
						if (urlContains('?sAction=')) {
							$('#Table2').css('width','100%');
							$('#Table2').parent().closest('table').css('width','100%');
						}
						$('td').css('vertical-align','top').css('padding','2px');
						$('ul').css('list-style','none');
						$('ul li').css('padding','0 5px 0 0');
						$('body').css('padding','10px 30px 30px');
						setTimeout(function(){
							window.resizeTo(750,650);
						},50);
					}
					
					else if (urlContains('/faf/partDonorReg/pledgeDescription.asp')) {
						// Pledge Entry Instructions
						$('p:contains("our pledge entry history is displayed")').html('Your pledge entry history is displayed. "Pending" donations refer to donations that have not been cleared by the organization. As soon as they are confirmed, those donations are marked as received and can be viewed in your donation report.<br /><br />To enter new donations, click the "Enter Pledge" button. To view the details of donations that are still pending, click the "View Pending" next to the date the donations were entered.');
					}
					
					else if (urlContains('/faf/emailCenter/emailAddressbook.asp')) {
						// Address book
						contentPrimary.find('h4').text('Address Book');
					}
					
					else if (urlContains('/faf/emailCenter/emailPreview.asp')) {
						// Email preview
						contentPrimary.find('h3').text('Email Preview');
					}
					
					else if (urlContains('/faf/emailImport/Setup_DirectProcessImport.asp')) {
						// After csv email import success, modify link to make more sense
						contentPrimary.find('a:contains("Back to Event Management Menu")').html('Back to My Headquarters');
					}
					
					else if (urlContains('/faf/emailImport/Setup_default.asp?Mode=Step2')) {
						// Email Import (CSV) Step 2
						// Clean up the HTML mess on this page... 
						contentPrimary.find('td b').contents().unwrap();
						contentPrimary.find('ol').closest('td').find(':not(input,ol)').andSelf().contents().each(function() {
							if (this.nodeType == 3 && !$(this).parent().is('li')) $(this).wrap('<span class="content" />');
						});
						contentPrimary.find('ol').closest('td').find('br').remove();
						contentPrimary.find('.content').each(function() {
							if (trim($(this).text()) == "") $(this).remove();
						});					
						$('<p id="paragraph1" />').insertBefore(contentPrimary.find('.content:eq(0)'));
						$('<p id="paragraph2" />').insertAfter(contentPrimary.find('ol'));
						contentPrimary.find('.content:eq(0)').parent().find('.content,ol').each(function() {
							if ($(this).is('ol')) return false
							else $(this).appendTo('#paragraph1').contents().unwrap();
						});
						contentPrimary.find('.content').each(function() {
							$(this).appendTo('#paragraph2').contents().unwrap();
						});
						contentPrimary.find('#paragraph1').html('Most applications (including Microsoft OutLook, Yahoo, or Netscape address book) will allow you to export contact data into a comma delimited text file (.csv). We will import your contacts from a .csv file. Exporting your data is different in each application, but export should follow the same general approach:');
						contentPrimary.find('#paragraph2').html('Now choose the file to import (it may take a few minutes to upload your file, depending on the file size and your connection speed).');
						contentPrimary.find('li:contains("Select the Save As")').html('Select the Save As... or  Export...menu option, usually from the File menu');
						contentPrimary.find('li:contains("Follow the direction to ")').html('Follow the direction to save the file in a Comma Separated Value (CSV) format');
					}
					
					else if (urlContains('/faf/emailImport/Setup_default.asp')) {
						// Email Import (CSV) Step 1
						contentPrimary.find('td b').contents().unwrap();
						contentPrimary.find('td[colspan="4"]:contains("The Import Utility will guide you through the process of importing")').html("The Import Utility will guide you through the process of importing accounts and contact information into your address book. Answer the questions on each screen and click NEXT when you are ready to continue. You can import any file saved a Comma Seperated Value (CSV). Make sure the file contains First name, Last name, and Email address fields before importing because you will map these fields to fields in Sphere during the import.");	
					}
					
					else if (urlContains('/faf/emailImport/Import_default.asp')) {
						// Modify Email Import Link
						contentPrimary.find('td b').contents().unwrap();
						contentPrimary.find('.white a').remove();
					}
					
					else if (urlContains('/faf/login/import_image.asp')) {
						// Image import form
						if (!$.browser.msie) {
							var form1 = contentPrimary.find('form[name="form1"]');
							var form1Table = form1.closest('table');
							form1.insertBefore(form1Table);
							form1Table.appendTo(form1);
						}
					}
					
					
					/*
					=======
					 Login
					=======
					*/
					
					else if (urlContains('/faf/login/loginFindPassword.asp')) {	
						// Login page
						var badHtml = contentPrimary.find('#Table7 td:contains("remember your User Name or E-mail address")');
						badHtml.find('a').wrap('<span class="orgLink" />');
						var link = contentPrimary.find('.orgLink');
						badHtml.html('<p>Can\'t remember your User Name or E-mail address; or you have not yet set up a challenge question and response?</p><p>Contact '+link.html()+' for assistance.</p></td></tr>');
						$('td[colspan="4"]:contains("You will receive an e-mail to reset your password")').text("You will receive an e-mail to reset your password (Please note this must be the e-mail address on file). Additionally, you will need to answer the Security challenge question on record.");
					}
					
					else if (urlContains('/faf/login/loginParticipantPopUp.asp')) {
						// Login popup
						$('a:contains("Forgot")').removeAttr('onclick').unbind('click').attr('href','/faf/login/loginFindPassword.asp?ievent='+s.ievent).attr('target','_blank');
					}
					
					
					/*
					=====
					 FAQ
					=====
					*/
					
					else if (urlContains('/faf/help/helpFaq.asp')) {
						contentPrimary.find('b:contains("Can friends and family make a donation")').text('Can friends and family make a donation to a Participant by going through the main website?');
						contentPrimary.find('b:contains("Why is the \"Sponsor")').text('Why is the "Sponsor Participant" search not finding a Participant that I know has registered?');
						contentPrimary.find('p:contains("Go to the Log-in section on")').html('<b>Comment puis-je savoir qui m’a fait des dons ? </b><br>Go to the Log-in section on the site. Use the Username and Password that you received when you registered for the event. You can then view your Donor list and the amounts that have been donated.<br /><br /><a href="#top">Haut de la page</a>');
						contentPrimary.find('b:contains("How do I register for the")').text('How do I register for the event online?');
					}
					
					
					
					/*
					===================
					 NON-PAGE SPECIFIC
					===================
					*/
					
					// my hq menu
					var hqMenu = $('#myHQmenu');
					if (!hqMenu.length) {
						// FAF Standard doesn't have an ID, so add it manually:
						if (contentPrimary.find('a.subnav').length) {
							contentPrimary.find('a.subnav:eq(0)').closest('table').parent().closest('table').attr('id','myHQmenu');
							hqMenu = $('#myHQmenu');
						}
					}
					
					// Now we can check if we're currently within MyHQ:
					if (hqMenu.length) {
						// remove white space chars from menu
						hqMenu.find('a:contains("HQ")').text('My HQ');
						hqMenu.find('a:contains("Webpage")').text('My Webpage');
					}
				
					// remove login popup in utility
					if (!$('#logout').find('a').length) {
						$('#login').html('<ul class="menu"><li><a href="https://www.kintera.org/faf/login/loginParticipant.asp?ievent='+s.ievent+'&login=lmenu">Sign In</a></li></ul>').show();
					}
					
					// if popup
					if (m.getUrlVars()['popup'] == "true") {
						$('body').addClass('popup');
						$('table').removeAttr('width');
					}
					

				},
				
				
				buttons: function() {
				
					var l = Essentials.Localize,
						m = l.Methods,
						s = l.Storage,
						o = l.Options,
						contentPrimary = o.contentPrimary;
				
					// Replace image form buttons with text versions
					// ---------------------------------------------
					
					$('#donateSubmit').val('Donate');
					
					// choose columns button width fixes
					$('#ok').css('width','auto');
					
					// email import step 3
					if (m.urlContains('/faf/emailImport/Setup_default.asp?Mode=Step3')) {
						// fix back button
						contentPrimary.find('img[src*="back"]').removeAttr('onclick').unbind('click').wrap('<a href="#" onclick="go_back()"></a>');
					}
					
					// input[type=image]
					contentPrimary.find('input:image').each(function() {
						
						var src = $(this).attr('src'),
							name = $(this).attr('name');
							name = (typeof name != "undefined") ? name : "",
							buttonSrc = s.inputImageSRC;
							
						if ($(this).is(':visible')) {
							for (var i=0; i<buttonSrc.length; i++) {
								if (src.indexOf(buttonSrc[i])>-1) {
									$(this).after("<input class='button newButton' type='submit' value='Next' name='"+name+"' />").hide();
								}
							}
						}
						
					});
							
					// convert any input values with NCR to character
					contentPrimary.find('input:button').each(function(){
						$(this).val(m.convertDecNCR2Char($(this).val()));
					});
							
					// <a><img /></a>
					var btnFound, button, btnSrc, find, replace, 
						imageButtons = s.imageOnClickSRC,
						length = imageButtons.length;
					contentPrimary.find('a:not(".button") > img').each(function() {
						btnFound = false;
						button = $(this);
						btnSrc = button.attr('src');
						for (var i=0; i<length; i++) {
							find = imageButtons[i][0];
							replace = imageButtons[i][1];
							if (btnSrc.indexOf(find)>-1) {
								button.after(replace);
								btnFound = true;
								break;
							}
						}	
						if (btnFound) {
							button.hide();
							button.parent().addClass('button');
						}
					});
					
					// email import step 1
					if (m.urlContains('faf/emailImport/Setup_default.asp?')) {
						contentPrimary.find('.newButton').click(function() {
							$(this).closest('table').parent().find('form').submit();
						});
					}
					
					// email import step 3
					if (m.urlContains('faf/emailImport/Setup_default.asp?Mode=Step3')) {
						
						// fix form
						if (!$.browser.msie) {
							var form = contentPrimary.find('form[action*="Setup_DirectProcessImport_Flash.asp"]');
							var table = form.closest('table');
							table.wrap(form);
						} else {
							contentPrimary.find('input.newButton[name="Import"]').click(function() {
								contentPrimary.find('form[action*="Setup_DirectProcessImport_Flash.asp"]').submit();
							});
						}
						
					}
				
				},
				
				
				popups: function() {
				
					var l = Essentials.Localize,
						m = l.Methods,
						s = l.Storage,
						o = l.Options,
						contentPrimary = o.contentPrimary,
						language = s.language,
						urlContains = m.urlContains;
						
					/*
					===========
					 NYROMODAL
					===========
					*/
					
					// Helplets
					var popupLinks = contentPrimary.find('a.fafFormHelp, a[onclick*="INC_help.asp"], a[onclick*="jsTools_openWin("], a[onclick*="window.open"]').not('a:contains("Print Donation Form")'),
						length = popupLinks.length;
					for (var i=0; i<length; i++) {
						
						var link = $(popupLinks[i]);
							
						// previous participant login popup:
						if ((urlContains('/faf/reg_new/registerPre.asp') || urlContains('/faf/r/registerPre.asp') || urlContains('/faf/volunteerRegNew/participantGen.asp')) && link.text() == "click here") {

							var onclick1 = link.attr('onclick');
							var parts1 = onclick1.split("'");
							var href1 = parts1[1]+"&language="+language;
							
							link.unbind('click').removeAttr('onclick').click(function() {
								window.open(href1,'help','width=500,height=250,scrollbars=yes,resizable=yes');
								return false;
							});
							
						} else {

							// Grab attributes
							var link = $(popupLinks[i]);
							var onclick2 = link.attr('onclick').toString();
							var parts2 = (onclick2.indexOf("'")>-1) ? onclick2.split("'") : onclick2.split('"');
							var href2 = (parts2[1].indexOf('?')>-1) ? parts2[1]+"&language="+language + '&popup=true' : parts2[1]+"?language="+language + '&popup=true';
							if (href2.indexOf('kintera.org') > -1) href2 = href2.split('kintera.org')[1];
							link.removeAttr('onclick').unbind('click').attr('href',href2).attr('target','_blank').addClass('nyroModal');
							
						}
						
					}
					
					// Pledge entry instructions button
					if (urlContains('/faf/partDonorReg/offlineDonationEntry.asp')) {				
						var button = contentPrimary.find('input[name="instruction"]').hide();
						var onclick = button.attr('onclick');
						var parts = onclick.split("'");
						var href = (parts[1].indexOf('?')>-1) ? parts[1]+"&language="+language + '&popup=true' : parts[1]+"?language="+language + '&popup=true';
						if (href.indexOf('kintera.org') > -1) href = href.split('kintera.org')[1];
						button.after('<a class="button nyroModal" target="_blank" href="'+href+'">Instructions</a>');
					}
					
					// My HQ: Start Here Popup
					else if (urlContains('/faf/login/partMenu.asp')) {
						contentPrimary.find('a[href*="openHelpWindow()"]').each(function() {
							link = $(this);
							href = '../help/helpLoginFirstTime.asp?ievent='+s.ievent+'&language='+language + '&popup=true';
							link.unbind('click').attr('href',href).attr('target','_blank').addClass('nyroModal');
						});
					}
					
					
					// Add CLOSE links
					if (urlContains('/faf/help/helpLoginFirstTime.asp') || 
						urlContains('/includes/INC_help.asp') || 
						urlContains('/faf/partDonorReg/pledgepophelp.asp') || 
						urlContains('/faf/partDonorReg/pledgeDescription.asp') || 
						urlContains('/faf/partDonorReg/pledgeSummary.asp?printFrom=printPledge')) {
						$('a[href*="window.close"], a[onclick*="window.close"], input[onclick*="window.close"]').addClass('nyroModalClose').attr('onclick','parent.$.nmTop().close();');
					}
					
					// Activate NyroModal
					if (!urlContains('/faf/donorReg/donorBilling.asp')) { // don't let nyro mess with the cvv popup
						contentPrimary.find('.nyroModal').nyroModal();
					}
					
				},
				
				
				printableDonation: function() {
					
					var l = Essentials.Localize,
						m = l.Methods,
						o = l.Options,
						contentPrimary = o.contentPrimary,
						language = m.getLanguage(),
						link = contentPrimary.find('a[href*="openDonationForm()"],a[onclick*="/faf/tools/donationform.asp"]'),
						pdf_fr = o.donationPDF_fr,
						pdf_en = o.donationPDF_en;
					
					if (link != null) {
						if (pdf_fr != null && language == "fr") link.removeAttr('onclick').unbind('onclick').attr('href',pdf_fr);
						if (pdf_en != null && language == "en") link.removeAttr('onclick').unbind('onclick').attr('href',pdf_en);
					}
					
				}
				
				
			},
			
			
			
			
			/* ====== */
			/*  AJAX  */
			/* ====== */
			
			fetchTerms: function(callback) {
			
				var l = Essentials.Localize,
					m = l.Methods,
					s = l.Storage,
					o = l.Options,
					terms = m.getTerms(),
					contentPrimary = o.contentPrimary,
					container, csv, name, temp = [];
				
				if (!o.cacheTerms) {
					terms = [];
				}
				
				if (terms != null && terms.length) {

					// FINISH
					m.setTerms(terms);
					callback();
					
				} else {
				
					// GLOBAL
					container = o.globalTermsContainer,
					csv = location.protocol+o.translation_global.split(':')[1];
					name = 'global';
					m.fromCSV(csv, name, container, function(result) {					

						temp.push(result);

						// PAGES
						container = o.pageTermsContainer;
						csv = location.protocol+o.translation_page.split(':')[1];
						name = 'pages';		
						m.fromCSV(csv, name, container, function(result) {
							
							// store terms in sessvars
							temp.push(result);
							m.setTerms(temp);
							
							// FINISH
							callback();
							
						});
					});
				}
			},
			
			
			fromCSV: function(csv, name, container, callback) {
				
				var proxy = Essentials.Localize.Options.proxy,
					data = '?csv=' + encodeURIComponent(csv) + '&callback=?',
					newObject;
				
				$.ajax({
					url:proxy+data,
					type:'GET',
					data:'data=',
					dataType: 'json',
					success: function(result) {
						if (typeof result == "string") {
							result = JSON.parse(result);
						}
						newObject = {
							"name":name,
							"container":container,
							"terms":result.data
						};
						callback(newObject);
					},
					error: function() {
						console.log("There was an error with the localization request.");
						callback({});
					}
				});
			},
			
			
			createLocalSelect: function(type, query) {
				
				var m 			= Essentials.Localize.Methods,
					selects 	= Essentials.Localize.Options.contentPrimary.find(query),
					proxy 		= 'https://www.kinteratools.com/local/localize-'+type+'.php?callback=?',
					html 		= sessvars[type],
					select, defaultVal;
				
				if (selects.length) {
					selects.each(function() {
						select = $(this);
						defaultVal = select.val();
						select.html(html);
						// select default option:
						select.find('option[value="'+defaultVal+'"]').attr('selected','selected');
					});
					// fixes:
					selects.find('option:contains("tats-Unis")').val('US');
					// move 'not in usa' to bottom:
					selects.find('option[value="XX"]').appendTo(select);
				}
				
			},
			
			
			fetchLocalSelectData: function(proxy, callback) {
				$.ajax({
					type: "GET",
					data: "data=",
					dataType: "json",
					url: proxy,
					contentType: "application/x-www-form-urlencoded;charset=ISO-8859-1",
					success: function(result) {
						var length = result.data.length, item, html = "";
						for (var i = 0; i < length; i++) {
							item = result.data[i];
							if (typeof item != "undefined") {
								html += '<option value="'+item.prefix+'">'+item.to+'</option>';
							}
						}
						callback(html);
					},
					error: function() {
						callback(null);
					}
				});
			},
			
			
			fetchCountries: function(callback) {
				
				var m = Essentials.Localize.Methods,
					proxy = 'https://www.kinteratools.com/local/localize-countries.php?callback=?',
					data = m.getCountries();
					
				if (data == null) {
					m.fetchLocalSelectData(proxy,function(result) {
						m.setCountries(result);
						callback();
					});
				} else {
					m.setCountries(data);
					callback();
				}
				
			},
			
			
			fetchStates: function(callback) {
			
				var m = Essentials.Localize.Methods,
					proxy = 'https://www.kinteratools.com/local/localize-states.php?callback=?',
					data = m.getStates();
					
				if (data == null) {
					m.fetchLocalSelectData(proxy,function(result) {
						m.setStates(result);
						callback();
					});
				} else {
					m.setStates(data);
					callback();
				}
				
			},
			
			
			gatherLabels: function() {
				
				var contentPrimary = Essentials.Localize.Options.contentPrimary,
					data, labels_en = [];
				
				// Store English form labels:
				contentPrimary.find('font[color="#ff0000"]').parent().each(function() {
					$(this).contents().filter(function() {
						data = trim(this.data);
						if (this.nodeType === 3 && data != "") {
							data = data.replace(':','');
							labels_en.push(data);
						}
					});
				});
				Essentials.Localize.Storage.labels_en = labels_en;
			},
			
			
			
			
			/* =========== */
			/*  TRANSLATE  */
			/* =========== */
			
			translate: {
			
			
				page: function() {
				
					var l = Essentials.Localize,
						m = l.Methods,
						s = l.Storage,
						index = 0, 
						length = s.fr_terms.length;
					
					// pass in an index to search the terms array
					var translateThis = function(index) {
					
						var termsGroup = s.fr_terms[index];
						var container = $(termsGroup.container);
						termsGroup = termsGroup.terms;
						var groupLength = termsGroup.length;
						var temp = [], url;
						
						// create terms array for current url
						for (var g=0; g<groupLength; g++) {
							url = termsGroup[g].url;
							if (url == "all" || m.urlContains(url)) {
								temp.push(termsGroup[g]);
							}
						}
						
						// start translation within specified container
						if (temp.length) {
							if (!container.length) container = $('body');
							container.translate(temp, function() {
								index++;
								if (index < length) translateThis(index);
							});
						} else {
							index++;
							if (index < length) translateThis(index);
						}
					};
					
					// hack for some popups
					if (m.urlContains('/faf/includes/INC_help.asp') || m.urlContains('/faf/teams/registerTeam.asp') || m.urlContains('/faf/search/searchTeam.asp')) {
						setTimeout(function(){
							translateThis(index);
						},2000);
					} else {
						translateThis(index);
					}

				},

				
				popups: function() {
					
					var l = Essentials.Localize,
						m = l.Methods,
						s = l.Storage,
						o = l.Options,
						popupUrl, name, opt, popup, popupHtml;
					
					// For popups that don't have the scripts installed
					if (m.urlContains('/faf/login/participantStats.asp')) {
						
						o.contentPrimary.find('a.newPopup').unbind('click').attr('href','#').click(function() {
							
							popupUrl = '../../autogen/home/choose_column.asp?fn=partStats&language=fr';
							name = "Columns";
							opt = "menubar=no,width=640,height=400,scrollbars,resizable";
							popup = window.open(popupUrl, name, opt);
							
							var termsGroup = s.fr_terms[1].terms,
								url, temp = [];
							$.each(termsGroup, function() {
								url = $(this)[0].url;
								if (popupUrl.indexOf(url)>-1) {
									temp.push($(this)[0]);
								}
							});
							
							setTimeout(testLoaded, 50);
							
							function testLoaded() {
								if (!$('form', popup.document).length) {
									setTimeout(testLoaded, 50);
								} else {
									popupHtml = '<div id="localize">'+$('body', popup.document).html()+'</div>';
									$(popupHtml).translate(temp, function(html) {
										$('body', popup.document).html('').append(html);
										popup.focus();
									});
								}
							}

						});
					}
					
					else if (m.urlContains('/faf/search/searchTeamPart.asp')) {
						setTimeout(function(){
							$('.printNotice a').click(function() {
								if (typeof $.colorbox != "undefined") $.colorbox.close();
							});
						},100);
					}
					
					// Donate with confidence:				 
					if (o.confidence_fr != "" && o.confidence_fr != null) {
						o.contentFooter.find('.footCopyRightLogo').removeAttr('onclick').unbind('click').click(function() {
							jsTools_popup2(o.confidence_fr,'width=800,scrollbars,resizable');
							return false;
						});
					}
				},
				

				buttons: function() {
					var contentPrimary = Essentials.Localize.Options.contentPrimary,
						inputButtons = Essentials.Localize.Storage.translations.inputButtons,
						buttonVal, find, replace, length = inputButtons.length;
					contentPrimary.find('input:button, input:submit').each(function() {
						buttonVal = $(this).val();
						for (var i=0; i<length; i++) {
							find = inputButtons[i][0];
							replace = inputButtons[i][1];
							if (find == buttonVal) {
								$(this).val(replace);
							}
						}
					});
				},
			
			
				scripts: function() {
				
					var s = Essentials.Localize.Storage,
						contentPrimary = Essentials.Localize.Options.contentPrimary;
						
					// scripts
					//var scripts = $('script:contains("alert")').not(':contains("fafJSON")').not(':contains("jQuery")').not(),
					var scripts = $('script:contains("alert")').filter(function(){
						var html = $(this).html();
						if (html.indexOf('fafJSON')==-1 && !$(this).closest('#additionalHeader').length) {
							return $(this);
						}
					});
					var script, newjs;
						
					// labels	
					var labels = s.labels_en,
						captionCells = contentPrimary.find('font[color="#ff0000"]').parent().contents().filter(function() {
							return (this.nodeType === 3 && trim(this.data) != "");
						}),
						newLabel;
						
					// validations
					var validations = s.translations.validations,
						length = validations.length,
						find, replace, regex;
					
					if (typeof labels != "undefined") {
						scripts.each(function() {
						
							script = $(this);
							newjs = script.html();
							
							// replace alerts with new labels
							captionCells.each(function(i) {
								newLabel = trim(this.data).replace(':','');
								newjs = newjs.replace("- "+labels[i], "- "+newLabel);
								newjs = newjs.replace(labels[i]+'"', newLabel+'"');
							});
						
							// Translate Validation Phrases...
							for (var i=0; i<length; i++) {
								find = validations[i][0];
								replace = validations[i][1];
								regex = new RegExp(RegExp.escape(find),"g");
								newjs = newjs.replace(regex, replace);
							}
							script.remove();
							contentPrimary.append('<sc'+'ript class="newjs">'+newjs+'</sc'+'ript>');
						});
					}
				},
				
				
				currency: function() {
					
					var l = Essentials.Localize,
						m = l.Methods,
						s = l.Storage,
						o = l.Options,
						contentPrimary = o.contentPrimary,
						contentTertiary = o.contentTertiary,
						urlContains = m.urlContains;
					
					var simpleFormatCurrency = function(elems) {
						$.each(elems,function() {
							var html = $(this).html(),
								parts = html.split('$');
							$(this).html(parts[1]+' <span class="currency">CAN $</span>');
						});
					};
					
					if (urlContains('donorPledge.asp') || urlContains('searchTeamPart.asp')) {
					
						// Personal Page & General Donation:
						simpleFormatCurrency(contentTertiary.find('.dataRowValue:contains("$"), .honorAmount:contains("$")'));
						simpleFormatCurrency($('#givingLevels').find('li:not(:last) span.transtext'));
						simpleFormatCurrency($('#teamList').find('dd:contains("$")'));
						
						// FAF Standard
						if (contentTertiary.find('#totalGoal').length) {
							simpleFormatCurrency(contentTertiary.find('#totalGoal, #totalRaised'));
							simpleFormatCurrency(contentPrimary.find('#fundraisingGoal, #fundraisingRaised'));
						}
					} 
					
					else if (urlContains('donorBilling.asp')) {
						// Donation Form:
						simpleFormatCurrency(contentPrimary.find('input[name="addAmount"]').prev().find('td:contains("$")'));
					}
					
					$('#fundbar').find('.fundbarGoal .fundValue:contains("$"), .fundbarRaised .localFundValue').each(function() {
						var html = $(this).html(),
							parts = html.split('$');
						$(this).html(m.formatCurrency(parts[1])+' <span class="currency">CAN $</span>');
					});
					
					if ((urlContains('donorPledge.asp') && urlContains('&view=preview')) || urlContains('/faf/partDonorReg/pledgeSummary.asp?printFrom=printPledge') || (urlContains('/faf/login/participantStats.asp') && urlContains('&getFrom=print'))) {
						$('form').formatCurrency();
					} 
					
					else {
						contentPrimary.formatCurrency();
					}
				},
				
				
				province: function() {
				
					var s = Essentials.Localize.Storage,
						m = Essentials.Localize.Methods,
						o = Essentials.Localize.Options,
						contentPrimary = o.contentPrimary,
						language = s.language;
				
					// Convert province textbox to select list for Canada
					var provinceCells = contentPrimary.find('p:contains("Province"), label:contains("Province"), form font:contains("Province")').not(':contains("/")').closest('td').next('td');
					
					provinceCells.each(function (i, cell) {
						if (!$(this).find('.province-select').length) {
						
							var provinceInput = $('input', cell).hide();
							if (provinceInput.length) {
								
								var provinceArr = (language == "fr") ? s.translations.provinceArr_fr : s.translations.provinceArr_en,
									provinceAbbr = s.translations.provinceAbbr,
									selectLabel = (language=="fr") ? "veuillez effectuer une s\u00E9lection" : "Please Select";
									
								html = '<select class="province-select"><option value="">-- '+selectLabel+' --</option>';	
								$.each(provinceArr,function(i,v) {
									html += '<option value="'+provinceAbbr[i]+'">'+v+'</option>';
								});
								html += '</select>';
								$(cell).append(html);
								
							}
						}
					}).find('select.province-select').change(function(){
						var input = $(this).parent().find('input[type="text"]');
						var val = sessvars.selectedProvince = $('option:selected',this).val();
						input.val(val);
					});	
					
					// set state sessvars
					contentPrimary.find('select[state]').change(function() {
						sessvars.selectedState = $(this).val();
					});
					
					// When click on same info
					contentPrimary.find('input[name="sameInfo"]').click(function() {
						if (sessvars.selectedState == null || sessvars.selectedState == "") {
							var province = sessvars.selectedProvince;
							contentPrimary.find('#billing_province').next().val(province);
						}
					});
					
					// if province saved, and on billing page:
					// select province, and select "not in usa" for state
					if (m.urlContains('/faf/r/Billing.asp')) {
						if (sessvars.selectedState == null || sessvars.selectedState == "" || typeof sessvars.selectedState == "undefined") {
							var province = sessvars.selectedProvince;
							contentPrimary.find('.province-select').val(province);
							contentPrimary.find('select[name="billing_state"]').val('XX');
						} else if (sessvars.selectedState != null && sessvars.selectedState != "" && typeof sessvars.selectedState != "undefined") {
							var state = sessvars.selectedState;
							contentPrimary.find('select[name="billing_state"]').val(state);
						} else if (sessvars.languagePref == 'fr') {
							contentPrimary.find('select[name="billing_state"]').val('XX');
						}
					}
				},
				
				
				popupCVV: function() {
					var o = Essentials.Localize.Options;
					// change explain link for popupCVV
					if (o.cvvUrl_fr != null) {
						o.contentPrimary.find('a[href*="cvvPage"]').attr('href','#').unbind('click').click(function() {
							var popup = window.open(o.cvvUrl_fr,'file','scrollbars=yes,resizable=yes,width=640,height=480,left=100,top=100');
							popup.focus();
						});
					}
				},
				
				
				months: function() {
					var contentPrimary = Essentials.Localize.Options.contentPrimary;
					contentPrimary.find('select option:contains("Jan")').closest('select').each(function() {
						var select = $(this);
						var html = select.outerHTML();
						html = html.replace('January','janvier')
							.replace('February','f\u00E9vrier')
							.replace('March','mars')
							.replace('April','avril')
							.replace('May','mai')
							.replace('June','juin')
							.replace('July','juillet')
							.replace('August','ao\u00FBt')
							.replace('September','septembre')
							.replace('October','octobre')
							.replace('November','novembre')
							.replace('December','d\u00E9cembre');
						select.replaceWith($(html));
					});
					
					// Translate date format on Pledge Entry:
					if (Essentials.Localize.Methods.urlContains('/faf/partDonorReg/pledgeEntry.asp')) {
						contentPrimary.find('img[src*="questionmk.gif"]').closest('table').find('tr').each(function(i) {
							if (i) { // Skip the header row
								var td = $(this).find('td:eq(1)'),
									date = trim(td.text()).split(' '),
									month = date[0],
									day = date[1].replace(',',''),
									year = date[2];
								switch (month) {
									case "Jan":
										month = "jan";
										break;
									case "Feb":
										month = "fév";
										break;
									case "Mar":
										month = "mars";
										break;
									case "Apr":
										month = "avr";
										break;
									case "May":
										month = "mai";
										break;
									case "Jun":
										month = "juin";
										break;
									case "Jul":
										month = "juil";
										break;
									case "Aug":
										month = "août";
										break;
									case "Sep":
									case "Sept":
										month = "sept";
										break;
									case "Oct":
										month = "oct";
										break;
									case "Nov":
										month = "nov";
										break;
									case "Dec":
										month = "déc";
										break;
								}			
								td.html(day+" "+month+", "+year);
							}
						});
					}
				},
				
				
				dates: function() {
					var contentPrimary = Essentials.Localize.Options.contentPrimary,
						urlContains = Essentials.Localize.Methods.urlContains;
					// print view popup is different
					if (urlContains('/faf/login/participantStats.asp') && urlContains('&getFrom=print')) {
						$('form').formatDates();
					} else {
						contentPrimary.formatDates();
					}
				},
				
				
				countries: function() {
					var type		= "countries";
					var query 		= 'select[name="country"], select[name="BillCountry"], select[name="ShiptoCountry"], select[name="billing_country"]';
					Essentials.Localize.Methods.createLocalSelect(type,query);
				},
			
			
				states: function() {
					var type		= "states";
					var query 		= 'select[name=state], select[name=BillState], select[name=ShiptoState], select[name=billing_state]';
					Essentials.Localize.Methods.createLocalSelect(type,query);
				},
				
				
				iframes: function() {
					
					var m = Essentials.Localize.Methods,
						s = Essentials.Localize.Storage,
						o = Essentials.Localize.Options;
				
					// Translate Email Import Utility:
					o.contentPrimary.find('iframe[src*="Email/importControl"]').attr('id','importEmail');
					var ifrm = document.getElementById('importEmail');
					
					if (ifrm == null) {
						o.contentPrimary.find('iframe[src*="Email/importContact"]').attr('id','importEmail');
						ifrm = document.getElementById('importEmail');
					}
					if (ifrm != null) {
						ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
						var iframe = $("body", ifrm.document);
						iframe.find('img[src="../../FAF/images/step1.gif"]').replaceWith('<div style="font-weight:bold;font-size:18px;background:#f2f1f0;border:1px solid #ccc;padding:8px;">O\u00F9 conserver-vous vos contacts?</div>');
						iframe.find('img[src="../../FAF/images/step2.gif"]').replaceWith('<div style="font-weight:bold;font-size:18px;background:#f2f1f0;border:1px solid #ccc;padding:8px;">Contacts trouv\u00E9s!</div>');
						iframe.find('img[src="../images/step3.gif"]').replaceWith('<div style="font-weight:bold;font-size:18px;background:#f2f1f0;border:1px solid #ccc;padding:8px;">Votre carnet d\'adresse est mis \u00E0 jour.</div>');
						iframe.find('td:contains("You need to log onto")').each(function() {
							if ($(this).html() != null) {
								$(this).html($(this).html().toString().replace('You need to log onto','Vous devez ouvrir une session').replace('to get your contacts','Pour acc\u00E9der \u00E0 vos contacts'));
							}
						});					
						if (iframe.find('table:contains("Sign in to your E-mail Service")').html() != null) {
							iframe.find('table:contains("Sign in to your E-mail Service")').html(iframe.find('table:contains("Sign in to your E-mail Service")').html().toString().replace('Sign in to your E-mail Service','Inscrivez-vous \u00E0 votre service de courriel').replace('Address','Courriel ').replace('Password','Mot de passe '));
						}
						if (iframe.find('#tableErr').html() != null) {
							iframe.find('#tableErr').html(iframe.find('#tableErr').html().replace('Incorrect login/password combination. Try again.','Combinaison nom d\'usager et mot de passe erron\u00E9. Veuillez essayer \u00E0 nouveau.'));
						}
						iframe.find('#btnGmail').after('<input name="btnGmail" onclick="return GetContact();" type="submit" value="Ouvrir une session" />').hide();
						iframe.find('#btnImport').after('<input name="btnImport" onclick="return CheckForm();" type="submit" value="Ajouter" />').hide();
						iframe.find('#ImageButton[src*="btn_back.gif"]').hide().after('<input type="submit" id="ImageButton" value="Retour" name="ImageButton" />');
						iframe.find('#noResult td:contains("There are no contacts in your email!")').html('Il n\'y a aucun contact dans votre courriel.');
					}
					
					if (m.urlContains('/emailImport/Import_default.asp?step=3')) {
						o.contentPrimary.find('img[src="../images/step3.gif"]').replaceWith('<div style="font-weight:bold;font-size:18px;background:#f2f1f0;border:1px solid #ccc;padding:8px;">Votre carnet d\'adresse est mis \u00E0 jour.</div>');
					}
					
					
					// My HQ graph
					o.contentPrimary.find('iframe[src*="partMenuGraph.asp"]').attr('id','graph');
					ifrm = document.getElementById('graph');
					if (ifrm != null) {
						ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
						var iframe = $("body", ifrm.document);
						iframe.find('select#ddlChartType option:contains("Last Five Days")').text("Derniers 5 jours");
						iframe.find('select#ddlChartType option:contains("Last Full Week")').text("Derni\u00E8re semaine compl\u00E8te");
						iframe.find('select#ddlChartType option:contains("1 Year")').text("Ann\u00E9e compl\u00E8te");
						iframe.find('select#ddlChartType option:contains("Last 30 Days")').text("Derniers 30 jours");
						
						function translateChart() {
							if (iframe.find('#lineCanvas b:contains("Processing")').html() != null)
								iframe.find('#lineCanvas b:contains("Processing")').html(iframe.find('#lineCanvas b:contains("Processing")').html().replace('Processing','Chargement'));
							if (iframe.find('#totalsCanvas b:contains("Total for Range")').html() != null)
								iframe.find('#totalsCanvas b:contains("Total for Range")').html(iframe.find('#totalsCanvas b:contains("Total for Range")').html().replace('Total for Range','Total pour ces crit\u00E8res '));
							if (iframe.find('#lineCanvas b:contains("No Donations Available")').html() != null)
								iframe.find('#lineCanvas b:contains("No Donations Available")').html(iframe.find('#lineCanvas b:contains("No Donations Available")').html().replace('No Donations Available','Aucun don disponible'));
							iframe.find('#totalsCanvas b:contains("CAN$")').each(function() {
								$(this).formatCurrency();	
							});
							iframe.find('#lineCanvas').formatCurrency();
						};
						translateChart();
						
						iframe.find('#ddlChartType').change(function() {
							translateChart();
							setTimeout(function(){
								translateChart();
							},2000);
						});
					}
				},
				
				
				logo: function() {
					var o = Essentials.Localize.Options;
					if (o.logo_fr != null) {
						o.logo_fr = location.protocol + o.logo_fr.split(':')[1];
						$('#logo').find('img').attr('src',o.logo_fr);
					}
				},
				
				
				lostTerms: function() {
					// email template popup in email center
					if (Essentials.Localize.Methods.urlContains('/faf/emailCenter/popUpEmailTemplateSaveAs.asp')) {
						setTimeout(function() {
							$('input[type="text"]').each(function() {
								if ($(this).val().indexOf('unused')>-1) {
									$(this).val('--- mod\u00E8le inutilis\u00E9 ---');
								}
							});
						},1000);
					}
				}
				
			},
			
			
			
			
			/* ========= */
			/*  GENERAL  */
			/* ========= */
			
			formatCurrency: function(num, symbol) {
				symbol = symbol || '';
				num = num.toString().replace(/\$|\,/g, '');
				if (isNaN(num)) num = "0";
				var sign = (num == (num = Math.abs(num)));
				num = Math.floor(num * 100 + 0.50000000001);
				var cents = num % 100;
				num = Math.floor(num / 100).toString();
				if (cents < 10) cents = "0" + cents;
				for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
					num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
				}
				return (((sign) ? '' : '-') + num);
			},
			
			
			fixDollarInputFields: function() {
				Essentials.Localize.Options.contentPrimary.find('input[name="addAmount"]').keypress(function(e) {
					if (e.which == 44 || e.which == 46) e.preventDefault();
				});
			},
			
			
			removeUntranslateables: function() {
				// Help popup
				Essentials.Localize.Options.contentTertiary.find('.feFAFHelp').hide();
				if (Essentials.Localize.Methods.urlContains('/faf/login/page_edit.asp')) {
					$('a[href="javascript:DoPreviewSubmit()"]').closest('tr').hide().prev().hide();
				}
			},
			
			
			removeForIE: function() {
				var contentPrimary = Essentials.Localize.Options.contentPrimary;
				if ($.browser.msie) {
					// hide choose columns in reports
					contentPrimary.find('a[href*="selclmns()"]').hide();		
					// hide gadgets
					contentPrimary.find('.subnav b:contains("Gadgets")').closest('td').hide().prev().hide().end().closest('td').next().hide();
					
				}
			},
			
			
			reportTime: function(isEnd) {
			
				var s = Essentials.Localize.Storage,
					d = new Date();
					
				s.lastTime = s.thisTime;
				s.thisTime = d.getTime();
				s.totalTime = s.thisTime - s.lastTime;
				
				if (isEnd) {
					console.log("TOTAL TIME: ",(s.thisTime - s.startTime)/1000 + ' seconds');
				} else {
					return (s.totalTime != 0) ? (s.totalTime)/1000 + ' seconds' : '0 seconds';
				}
			},
			
			
			urlContains: function(url) {
				return Essentials.Localize.Storage.href.indexOf(url.toLowerCase())>-1;
			},
			
			
			getUrlVars: function() {
				var vars = {};
				var parts = Essentials.Localize.Storage.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
					vars[key] = unescape(value.replace(/\+/g, " "));
				});
				return vars;
			},
			
			
			convertDecNCR2Char: function(str) { 
			
				var m = Essentials.Localize.Methods;
			
				// converts a string containing &#...; escapes to a string of characters
				// str: string, the input
			
				var dec2char = function(n) {
					// converts a single string representing a decimal number to a character
					// note that no checking is performed to ensure that this is just a hex number, eg. no spaces etc
					// dec: string, the dec codepoint to be converted
					var result = '';
					if (n <= 0xFFFF) { result += String.fromCharCode(n); } 
					else if (n <= 0x10FFFF) {
						n -= 0x10000
						result += String.fromCharCode(0xD800 | (n >> 10)) + String.fromCharCode(0xDC00 | (n & 0x3FF));
						} 
					else { result += 'dec2char error: Code point out of range: '+dec2hex(n); }
					return result;
				};
			
				// convert up to 6 digit escapes to characters
				str = str.replace(/&#([0-9]{1,7});/g, function(matchstr, parens) {
					return dec2char(parens);
				});
				return str;
			}
			
		}
		
	}

	
};

Essentials.Localize.go = function(opts) {

	var s = Essentials.Localize.Storage,
		m = Essentials.Localize.Methods;
		
	m.reportTime();
	m.main(opts);
	
	switch (s.language) {
		case "fr":
			// fetch ajax data:
			m.fetchTerms(function() {
				console.log("fetchTerms() => " + m.reportTime());
				s.termsLoaded = true;
			});
			m.fetchCountries(function() {
				console.log("fetchCountries() => " + m.reportTime());
				s.countriesLoaded = true;
			});
			m.fetchStates(function() {
				console.log("fetchStates() => " + m.reportTime());
				s.statesLoaded = true;
			});
			$(document).ready(function() { 
				console.log("document.ready ==> ", m.reportTime());
				m.assignContainers();
				m.sabotageTherm();
				m.initLoader();
				m.showLoader();
				
				// scripts/images loaded:
				function checkLoaded() {
					setTimeout(function() {
						if (s.termsLoaded && s.countriesLoaded && s.statesLoaded) {
							if ( $.browser.mozilla && ((m.urlContains('/faf/donorReg/donorPledge.asp') || m.urlContains('/faf/search/searchTeamPart.asp')) && !m.urlContains('&getMediaFormat'))) { 
								// firefox is too fast for the giving popup on the team page, so delay the translation a bit
								$(window).load(continueTranslate);
							} else {
								continueTranslate();
							}
						} else {
							checkLoaded();
						}
					},50);
				}
				checkLoaded();
				var continueTranslate = function() {
					console.log("continueTranslate();");
					m.createLanguageMenu(); console.log("createLanguageMenu() => " + m.reportTime());
					m.filterLanguageContent(); console.log("filterLanguageContent() => " + m.reportTime());
					m.cleanup.pages(); console.log("cleanup.pages() => " + m.reportTime());
					m.cleanup.buttons(); console.log("cleanup.buttons() => " + m.reportTime());
					m.cleanup.popups(); console.log("cleanup.popups() => " + m.reportTime());
					m.cleanup.printableDonation(); console.log("printableDonation() => " + m.reportTime());
					m.gatherLabels(); console.log("gatherLabels() => " + m.reportTime());
					m.protectElements(); console.log("protectElements() => " + m.reportTime());
					
					m.translate.page(); console.log("translate.page() => " + m.reportTime());
					m.translate.buttons(); console.log("translate.buttons() => " + m.reportTime());
					m.translate.months(); console.log("translate.months() => " + m.reportTime());
					m.translate.dates(); console.log("translate.dates() => " + m.reportTime());
					m.translate.currency(); console.log("translate.currency() => " + m.reportTime());
					m.translate.popups(); console.log("translate.popups() => " + m.reportTime());
					m.translate.popupCVV(); console.log("translate.popupCVV() => " + m.reportTime());
					$.getScript(Essentials.Localize.Options.overrides, function() { // translate overrides
						m.translate.scripts(); console.log("translate.scripts() => " + m.reportTime());
						m.translate.iframes(); console.log("translate.iframes() => " + m.reportTime());
						m.translate.lostTerms(); console.log("translate.lostTerms() => " + m.reportTime());
						m.translate.logo(); console.log("translate.logo() => " + m.reportTime());
						m.translate.states(); console.log("translate.states() ==> " + m.reportTime());
						m.translate.countries(); console.log("translate.countries() ==> " + m.reportTime());
						m.translate.province(); console.log("translate.province() => " + m.reportTime());
						
						m.fixDollarInputFields(); console.log("fixDollarInputFields() => " + m.reportTime());
						m.removeUntranslateables(); console.log("removeUntranslateables() => " + m.reportTime());
						m.removeForIE(); console.log("removeForIE() => " + m.reportTime());
						m.showPage(); console.log("showPage() => " + m.reportTime());
						m.hideLoader();
					});
					m.reportTime(true);
				};
			});
		break;
		default:
			$(document).ready(function() {
				m.assignContainers();
				m.sabotageTherm();
				m.createLanguageMenu(); console.log("createLanguageMenu() => " + m.reportTime());
				m.filterLanguageContent(); console.log("filterLanguageContent() => " + m.reportTime());
				m.cleanup.pages(); console.log("cleanup.pages() => " + m.reportTime());
				m.cleanup.buttons(); console.log("cleanup.buttons() => " + m.reportTime());
				m.cleanup.popups(); console.log("cleanup.popups() => " + m.reportTime());
				m.cleanup.printableDonation(); console.log("printableDonation() => " + m.reportTime());
				m.translate.dates(); console.log("translate.dates() => " + m.reportTime());
				m.translate.currency(); console.log("translate.currency() => " + m.reportTime());
				m.translate.province(); console.log("translate.province() => " + m.reportTime());
				m.reportTime(true);
			});
		break;
	}
};