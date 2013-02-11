/*==============================================
 FASTER TRIM()
 - Steven Levithan
------------------------------------------------
 http://blog.stevenlevithan.com/
----------------------------------------------*/
function trim (str) {
	if (typeof str != "undefined") {
		var	str = str.replace(/^\s\s*/, ''),
			ws = /\s/,
			i = str.length;
		while (ws.test(str.charAt(--i)));
		return str.slice(0, i + 1);
	}
}


/*==============================================
 SESSVARS v1.01
 - Thomas Frank
------------------------------------------------
 JavaScript based session object
 http://www.thomasfrank.se/sessionvars.html
----------------------------------------------*/
sessvars=function(){

	var x={};
	
	x.$={
		prefs:{
			memLimit:2000,
			autoFlush:true,
			crossDomain:false,
			includeProtos:false,
			includeFunctions:false
		},
		parent:x,
		clearMem:function(){
			for(var i in this.parent){if(i!="$"){this.parent[i]=undefined}};
			this.flush();
		},
		usedMem:function(){
			x={};
			return Math.round(this.flush(x)/1024);
		},
		usedMemPercent:function(){
			return Math.round(this.usedMem()/this.prefs.memLimit);
		},
		flush:function(x){
			var y,o={},j=this.$$;
			x=x||top;
			for(var i in this.parent){o[i]=this.parent[i]};
			o.$=this.prefs;
			j.includeProtos=this.prefs.includeProtos;
			j.includeFunctions=this.prefs.includeFunctions;
			y=this.$$.make(o);
			if(x!=top){return y.length};
			if(y.length/1024>this.prefs.memLimit){return false}
			x.name=y;
			return true;
		},
		getDomain:function(){
				var l=location.href
				l=l.split("///").join("//");
				l=l.substring(l.indexOf("://")+3).split("/")[0];
				while(l.split(".").length>2){l=l.substring(l.indexOf(".")+1)};
				return l
		},
		debug:function(t){
			var t=t||this,a=arguments.callee;
			if(!document.body){setTimeout(function(){a(t)},200);return};
			t.flush();
			var d=document.getElementById("sessvarsDebugDiv");
			if(!d){d=document.createElement("div");document.body.insertBefore(d,document.body.firstChild)};
			d.id="sessvarsDebugDiv";
			d.innerHTML='<div style="line-height:20px;padding:5px;font-size:11px;font-family:Verdana,Arial,Helvetica;'+
						'z-index:10000;background:#FFFFCC;border: 1px solid #333;margin-bottom:12px">'+
						'<b style="font-family:Trebuchet MS;font-size:20px">sessvars.js - debug info:</b><br/><br/>'+
						'Memory usage: '+t.usedMem()+' Kb ('+t.usedMemPercent()+'%)&nbsp;&nbsp;&nbsp;'+
						'<span style="cursor:pointer"><b>[Clear memory]</b></span><br/>'+
						top.name.split('\n').join('<br/>')+'</div>';
			d.getElementsByTagName('span')[0].onclick=function(){t.clearMem();location.reload()}
		},
		init:function(){
			var o={}, t=this;
			try {o=this.$$.toObject(top.name)} catch(e){o={}};
			this.prefs=o.$||t.prefs;
			if(this.prefs.crossDomain || this.prefs.currentDomain==this.getDomain()){
				for(var i in o){this.parent[i]=o[i]};
			}
			else {
				this.prefs.currentDomain=this.getDomain();
			};
			this.parent.$=t;
			t.flush();
			var f=function(){if(t.prefs.autoFlush){t.flush()}};
			if(window["addEventListener"]){addEventListener("unload",f,false)}
			else if(window["attachEvent"]){window.attachEvent("onunload",f)}
			else {this.prefs.autoFlush=false};
		}
	};
	
	x.$.$$={
		compactOutput:false, 		
		includeProtos:false, 	
		includeFunctions: false,
		detectCirculars:true,
		restoreCirculars:true,
		make:function(arg,restore) {
			this.restore=restore;
			this.mem=[];this.pathMem=[];
			return this.toJsonStringArray(arg).join('');
		},
		toObject:function(x){
			if(!this.cleaner){
				try{this.cleaner=new RegExp('^("(\\\\.|[^"\\\\\\n\\r])*?"|[,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t])+?$')}
				catch(a){this.cleaner=/^(true|false|null|\[.*\]|\{.*\}|".*"|\d+|\d+\.\d+)$/}
			};
			if(!this.cleaner.test(x)){return {}};
			eval("this.myObj="+x);
			if(!this.restoreCirculars || !alert){return this.myObj};
			if(this.includeFunctions){
				var x=this.myObj;
				for(var i in x){if(typeof x[i]=="string" && !x[i].indexOf("JSONincludedFunc:")){
					x[i]=x[i].substring(17);
					eval("x[i]="+x[i])
				}}
			};
			this.restoreCode=[];
			this.make(this.myObj,true);
			var r=this.restoreCode.join(";")+";";
			eval('r=r.replace(/\\W([0-9]{1,})(\\W)/g,"[$1]$2").replace(/\\.\\;/g,";")');
			eval(r);
			return this.myObj
		},
		toJsonStringArray:function(arg, out) {
			if(!out){this.path=[]};
			out = out || [];
			var u; // undefined
			switch (typeof arg) {
			case 'object':
				this.lastObj=arg;
				if(this.detectCirculars){
					var m=this.mem; var n=this.pathMem;
					for(var i=0;i<m.length;i++){
						if(arg===m[i]){
							out.push('"JSONcircRef:'+n[i]+'"');return out
						}
					};
					m.push(arg); n.push(this.path.join("."));
				};
				if (arg) {
					if (arg.constructor == Array) {
						out.push('[');
						for (var i = 0; i < arg.length; ++i) {
							this.path.push(i);
							if (i > 0)
								out.push(',\n');
							this.toJsonStringArray(arg[i], out);
							this.path.pop();
						}
						out.push(']');
						return out;
					} else if (typeof arg.toString != 'undefined') {
						out.push('{');
						var first = true;
						for (var i in arg) {
							if(!this.includeProtos && arg[i]===arg.constructor.prototype[i]){continue};
							this.path.push(i);
							var curr = out.length; 
							if (!first)
								out.push(this.compactOutput?',':',\n');
							this.toJsonStringArray(i, out);
							out.push(':');                    
							this.toJsonStringArray(arg[i], out);
							if (out[out.length - 1] == u)
								out.splice(curr, out.length - curr);
							else
								first = false;
							this.path.pop();
						}
						out.push('}');
						return out;
					}
					return out;
				}
				out.push('null');
				return out;
			case 'unknown':
			case 'undefined':
			case 'function':
				if(!this.includeFunctions){out.push(u);return out};
				arg="JSONincludedFunc:"+arg;
				out.push('"');
				var a=['\n','\\n','\r','\\r','"','\\"'];
				arg+=""; for(var i=0;i<6;i+=2){arg=arg.split(a[i]).join(a[i+1])};
				out.push(arg);
				out.push('"');
				return out;
			case 'string':
				if(this.restore && arg.indexOf("JSONcircRef:")==0){
					this.restoreCode.push('this.myObj.'+this.path.join(".")+"="+arg.split("JSONcircRef:").join("this.myObj."));
				};
				out.push('"');
				var a=['\n','\\n','\r','\\r','"','\\"'];
				arg+=""; for(var i=0;i<6;i+=2){arg=arg.split(a[i]).join(a[i+1])};
				out.push(arg);
				out.push('"');
				return out;
			default:
				out.push(String(arg));
				return out;
			}
		}
	};
	
	x.$.init();
	return x;
}();



/*==============================================
 REGULAR EXPRESSION ESCAPE
 - Colin Snover
------------------------------------------------
 Escapes special characters for a reg expression
 http://simonwillison.net/2006/Jan/20/escape/#p-6
----------------------------------------------*/
RegExp.escape = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
};




/*==============================================
 JQUERY COOKIE (PLUGIN)
 - Klaus Hartl
------------------------------------------------
 JavaScript cookie interface
 https://github.com/carhartl/jquery-cookie
----------------------------------------------*/
;(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);



/*==============================================
 JQUERY NYROMODAL CORE v2.0 (PLUGIN)
 - Cédric Nirousset
------------------------------------------------
 JavaScript lightbox plugin
 http://nyromodal.nyrodev.com/
----------------------------------------------*/
jQuery(function($, undefined) {

	var $w = $(window),
		$d = $(document),
		$b = $('body'),
		baseHref = $('base').attr('href'),
		// nyroModal Object
		_nmObj = {
			filters: [],	// List of filters used
			callbacks: {},	// Sepcific callbacks
			anims: {},	// Sepcific animations functions
			loadFilter: undefined,	// Name of the filter used for loading

			modal: false,	// Indicates if it's a modal window or not
			closeOnEscape: true,	// Indicates if the modal should close on Escape key
			closeOnClick: true,	// Indicates if a click on the background should close the modal
			useKeyHandler: false,	// Indicates if the modal has to handle key down event

			showCloseButton: true,	// Indicates if the closeButonn should be added
			closeButton: '<a href="#" class="nyroModalClose nyroModalCloseButton nmReposition" title="close">Close</a>',	// Close button HTML

			stack: false,	// Indicates if links automatically binded inside the modal should stack or not
			nonStackable: 'form',	// Filter to not stack DOM element

			header: undefined,	// header include in every modal
			footer: undefined,	// footer include in every modal
			
			// Specific confirguation for gallery filter
			galleryLoop: true,	// Indicates if the gallery should loop
			galleryCounts: true,	// Indicates if the gallery counts should be shown
			ltr: true, // Left to Right by default. Put to false for Hebrew or Right to Left language. Used in gallery filter

			// Specific confirguation for DOM filter
			domCopy: false, // Indicates if DOM element should be copied or moved
			
			// Specific confirguation for link and form filters
			ajax: {}, // Ajax options to be used in link and form filter
			
			// Specific confirguation for image filter
			imageRegex: '[^\.]\.(jpg|jpeg|png|tiff|gif|bmp)\s*$',	// Regex used to detect image link

			selIndicator: 'nyroModalSel', // Value added when a form or Ajax is sent with a filter content

			swfObjectId: undefined, // Object id for swf object
			swf:  {	// Default SWF attributes
				allowFullScreen: 'true',
				allowscriptaccess: 'always',
				wmode: 'transparent'
			},

			store: {},	// Storage object for filters.
			errorMsg: 'An error occured',	// Error message
			elts: {	// HTML elements for the modal
				all: undefined,
				bg: undefined,
				load: undefined,
				cont: undefined,
				hidden: undefined
			},
			sizes: {	// Size information
				initW: undefined,	// Initial width
				initH: undefined,	// Initial height
				w: undefined,		// width
				h: undefined,		// height
				minW: undefined,	// minimum Width
				minH: undefined,	// minimum height
				wMargin: undefined,	// Horizontal margin
				hMargin: undefined	// Vertical margin
			},
			anim: {	// Animation names to use
				def: undefined,			// Default animation set to use if sspecific are not defined or doesn't exist
				showBg: undefined,		// Set to use for showBg animation
				hideBg: undefined,		// Set to use for hideBg animation
				showLoad: undefined,	// Set to use for showLoad animation
				hideLoad: undefined,	// Set to use for hideLoad animation
				showCont: undefined,	// Set to use for showCont animation
				hideCont: undefined,	// Set to use for hideCont animation
				showTrans: undefined,	// Set to use for showTrans animation
				hideTrans: undefined,	// Set to use for hideTrans animation
				resize: undefined		// Set to use for resize animation
			},

			_open: false,	// Indicates if the modal is open
			_bgReady: false,	// Indicates if the background is ready
			_opened: false,	// Indicates if the modal was opened (useful for stacking)
			_loading: false,	// Indicates if the loading is shown
			_animated: false,	// Indicates if the modal is currently animated
			_transition: false,	//Indicates if the modal is in transition
			_nmOpener: undefined,	// nmObj of the modal that opened the current one in non stacking mode
			_nbContentLoading: 0,	// Counter for contentLoading call
			_scripts: '',	// Scripts tags to be included
			_scriptsShown: '',	//Scripts tags to be included once the modal is swhon

			// save the object in data
			saveObj: function() {
				this.opener.data('nmObj', this);
			},
			// Open the modal
			open: function() {
				if (this._nmOpener)
					this._nmOpener._close();
				this.getInternal()._pushStack(this.opener);
				this._opened = false;
				this._bgReady = false;
				this._open = true;
				this._initElts();
				this._load();
				this._nbContentLoading = 0;
				this._callAnim('showBg', $.proxy(function() {
					this._bgReady = true;
					if (this._nmOpener) {
						// fake closing of the opener nyroModal
						this._nmOpener._bgReady = false;
						this._nmOpener._loading = false;
						this._nmOpener._animated = false;
						this._nmOpener._opened = false;
						this._nmOpener._open = false;
						this._nmOpener.elts.cont = this._nmOpener.elts.hidden = this._nmOpener.elts.load = this._nmOpener.elts.bg = this._nmOpener.elts.all = undefined;
						this._nmOpener.saveObj();
						this._nmOpener = undefined;
					}
					this._contentLoading();
				}, this));
			},

			// Resize the modal according to sizes.initW and sizes.initH
			// Will call size function
			// @param recalc boolean: Indicate if the size should be recalaculated (useful when content has changed)
			resize: function(recalc) {
				if (recalc) {
					this.elts.hidden.append(this.elts.cont.children().first().clone());
					this.sizes.initW = this.sizes.w = this.elts.hidden.width();
					this.sizes.initH = this.sizes.h = this.elts.hidden.height();
					this.elts.hidden.empty();
				} else {
					this.sizes.w = this.sizes.initW;
					this.sizes.h = this.sizes.initH;
				}
				this._unreposition();
				this.size();
				this._callAnim('resize', $.proxy(function() {
					this._reposition();
				}, this));
			},

			// Update sizes element to not go outsize the viewport.
			// Will call 'size' callback filter
			size: function() {
				var maxHeight = this.getInternal().fullSize.viewH - this.sizes.hMargin,
					maxWidth = this.getInternal().fullSize.viewW - this.sizes.wMargin;
				if (this.sizes.minW && this.sizes.minW > this.sizes.w)
					this.sizes.w = this.sizes.minW;
				if (this.sizes.minH && this.sizes.minH > this.sizes.h)
					this.sizes.h = this.sizes.minH;
				if (this.sizes.h > maxHeight || this.sizes.w > maxWidth) {
					// We're gonna resize the modal as it will goes outside the view port
					this.sizes.h = Math.min(this.sizes.h, maxHeight);
					this.sizes.w = Math.min(this.sizes.w, maxWidth);
				}
				this._callFilters('size');
			},

			// Get the nmObject for a new nyroModal
			getForNewLinks: function(elt) {
				var ret;
				if (this.stack && (!elt || this.isStackable(elt))) {
					ret = $.extend(true, {}, this);
					ret._nmOpener = undefined;
					ret.elts.all = undefined;
				} else {
					ret = $.extend({}, this);
					ret._nmOpener = this;
				}
				ret.filters = [];
				ret.opener = undefined;
				ret._open = false;
				return ret;
			},
			
			// Indicate if an element can be stackable or not, regarding the nonStackable setting
			isStackable: function(elt) {
				return !elt.is(this.nonStackable);
			},

			// key handle function.
			// Will call 'keyHandle' callback filter
			keyHandle: function(e) {
				this.keyEvent = e;
				this._callFilters('keyHandle');
				this.keyEvent = undefined;
				delete(this.keyEvent);
			},

			// Get the internal object
			getInternal: function() {
				return _internal;
			},

			// Internal function for closing a nyroModal
			// Will call 'close' callback filter
			_close: function() {
				this.getInternal()._removeStack(this.opener);
				this._opened = false;
				this._open = false;
				this._callFilters('close');
			},
			// Public function for closing a nyroModal
			close: function() {
				this._close();
				this._callFilters('beforeClose');
				var self = this;
				this._unreposition();
				self._callAnim('hideCont', function() {
					self._callAnim('hideLoad', function() {
						self._callAnim('hideBg', function() {
							self._callFilters('afterClose');
							self.elts.cont.remove();
							self.elts.hidden.remove();
							self.elts.load.remove();
							self.elts.bg.remove();
							self.elts.all.remove();
							self.elts.cont = self.elts.hidden = self.elts.load = self.elts.bg = self.elts.all = undefined;
						});
					});
				});
			},
			
			// Public function for destroying a nyroModal instance, only for non open modal
			destroy: function() {
				if (this._open)
					return false;
				this._callFilters('destroy');
				if (this.elts.all)
					this.elts.all.remove();
				return true;
			},

			// Init HTML elements
			_initElts: function() {
				if (!this.stack && this.getInternal().stack.length > 1)
					this.elts = this.getInternal().stack[this.getInternal().stack.length-2]['nmObj'].elts;
				if (!this.elts.all || this.elts.all.closest('body').length == 0)
					this.elts.all = this.elts.bg = this.elts.cont = this.elts.hidden = this.elts.load = undefined;
				if (!this.elts.all)
					this.elts.all = $('<div />').appendTo(this.getInternal()._container);
				if (!this.elts.bg)
					this.elts.bg = $('<div />').hide().appendTo(this.elts.all);
				if (!this.elts.cont)
					this.elts.cont = $('<div />').hide().appendTo(this.elts.all);
				if (!this.elts.hidden)
					this.elts.hidden = $('<div />').hide().appendTo(this.elts.all);
				this.elts.hidden.empty();
				if (!this.elts.load)
					this.elts.load = $('<div />').hide().appendTo(this.elts.all);
				this._callFilters('initElts');
			},

			// Trigger the error
			// Will call 'error' callback filter
			_error: function(jqXHR) {
				this._callFilters('error', jqXHR);
			},

			// Set the HTML content to show.
			// - html: HTML content
			// - selector: selector to filter the content
			// Will init the size and call the 'size' function.
			// Will call 'filledContent' callback filter
			_setCont: function(html, selector) {
				if (selector) {
					var tmp = [],
						i = 0;
					// Looking for script to store them
					html = html
						.replace(/\r\n/gi, 'nyroModalLN')
						.replace(/<script(.|\s)*?\/script>/gi, function(x) {
								tmp[i] = x;
								return '<pre class=nyroModalScript rel="'+(i++)+'"></pre>';
							});
					var cur = $('<div>'+html+'</div>').find(selector);
					if (cur.length) {
						html = cur.html()
							.replace(/<pre class="?nyroModalScript"? rel="?([0-9]*)"?><\/pre>/gi, function(x, y, z) { return tmp[y]; })
							.replace(/nyroModalLN/gi, "\r\n");
					} else {
						// selector not found
						this._error();
						return;
					}
				}
				this.elts.hidden
					.append(this._filterScripts(html))
					.prepend(this.header)
					.append(this.footer)
					.wrapInner($('<div />', {'class': 'nyroModal'+ucfirst(this.loadFilter)}));

				// Store the size of the element
				this.sizes.initW = this.sizes.w = this.elts.hidden.width();
				this.sizes.initH = this.sizes.h = this.elts.hidden.height();
				var outer = this.getInternal()._getOuter(this.elts.cont);
				this.sizes.hMargin = outer.h.total;
				this.sizes.wMargin = outer.w.total;

				this.size();

				this.loading = false;
				this._callFilters('filledContent');
				this._contentLoading();
			},

			// Filter an html content to remove the script[src] and store them appropriately if needed
			// - data: Data to filter
			_filterScripts: function(data) {
				if (typeof data != 'string')
					return data;

				this._scripts = [];
				this._scriptsShown = [];
				var start = 0,
					stStart = '<script',
					stEnd = '</script>',
					endLn = stEnd.length,
					pos,
					pos2,
					tmp;
				while ((pos = data.indexOf(stStart, start)) > -1) {
					pos2 = data.indexOf(stEnd)+endLn;
					tmp = $(data.substring(pos, pos2));
					if (!tmp.attr('src') || tmp.attr('rel') == 'forceLoad') {
						if (tmp.attr('rev') == 'shown')
							this._scriptsShown.push(tmp.get(0));
						else
							this._scripts.push(tmp.get(0));
					}
					data = data.substring(0, pos)+data.substr(pos2);
					start = pos;
				}
				return data;
			},

			// Check if the nmObject has a specific filter
			// - filter: Filter name
			_hasFilter: function(filter) {
				var ret = false;
				$.each(this.filters, function(i, f) {
					ret = ret || f == filter;
				});
				return ret;
			},

			// Remove a specific filter
			// - filter: Filter name
			_delFilter: function(filter) {
				this.filters = $.map(this.filters, function(v) {
					if (v != filter)
						return v;
				});
			},

			// Call a function against all active filters
			// - fct: Function name
			// - prm: Parameter to be used in callback
			// return an array of all return of callbacks; keys are filters name
			_callFilters: function(fct, prm) {
				this.getInternal()._debug(fct);
				var ret = [],
					self = this;
				$.each(this.filters, function(i, f) {
					ret[f] = self._callFilter(f, fct, prm);
				});
				if (this.callbacks[fct] && $.isFunction(this.callbacks[fct]))
					this.callbacks[fct](this, prm);
				return ret;
			},

			// Call a filter function for a specific filter
			// - f: Filter name
			// - fct: Function name
			// - prm: Parameter to be used in callback
			// return the return of the callback
			_callFilter: function(f, fct, prm) {
				if (_filters[f] && _filters[f][fct] && $.isFunction(_filters[f][fct]))
					return _filters[f][fct](this, prm);
				return undefined;
			},

			// Call animation callback.
			// Will also call beforeNNN and afterNNN filter callbacks
			// - fct: Animation function name
			// - clb: Callback once the animation is done
			_callAnim: function(fct, clb) {
				this.getInternal()._debug(fct);
				this._callFilters('before'+ucfirst(fct));
				if (!this._animated) {
					this._animated = true;
					if (!$.isFunction(clb)) clb = $.noop;
					if (this.anims[fct] && $.isFunction(this.anims[fct])) {
						curFct = this.anims[fct];
					} else {
						var set = this.anim[fct] || this.anim.def || 'basic';
						if (!_animations[set] || !_animations[set][fct] || !$.isFunction(_animations[set][fct]))
							set = 'basic';
						curFct = _animations[set][fct];
					}
					curFct(this, $.proxy(function() {
							this._animated = false;
							this._callFilters('after'+ucfirst(fct));
							clb();
						}, this));
				}
			},

			// Load the content
			// Will call the 'load' function of the filter specified in the loadFilter parameter
			_load: function() {
				this.getInternal()._debug('_load');
				if (!this.loading && this.loadFilter) {
					this.loading = true;
					this._callFilter(this.loadFilter, 'load');
				}
			},

			// Show the content or the loading according to the current state of the modal
			_contentLoading: function() {
				if (!this._animated && this._bgReady) {
					if (!this._transition && this.elts.cont.html().length > 0)
						this._transition = true;
					this._nbContentLoading++;
					if (!this.loading) {
						if (!this._opened) {
							this._opened = true;
							if (this._transition) {
								var fct = $.proxy(function() {
									this._writeContent();
									this._callFilters('beforeShowCont');
									this._callAnim('hideTrans', $.proxy(function() {
										this._transition = false;
										this._callFilters('afterShowCont');
										this.elts.cont.append(this._scriptsShown);
										this._reposition();
										this.elts.cont.scrollTop(0);
									}, this));
								}, this);
								if (this._nbContentLoading == 1) {
									this._unreposition();
									this._callAnim('showTrans', fct);
								} else {
									fct();
								}
							} else {
								this._callAnim('hideLoad', $.proxy(function() {
									this._writeContent();
									this._callAnim('showCont', $.proxy(function() {
										this.elts.cont.append(this._scriptsShown);
										this._reposition();
										this.elts.cont.scrollTop(0);
									}, this));
								}, this));
							}
						}
					} else if (this._nbContentLoading == 1) {
						var outer = this.getInternal()._getOuter(this.elts.load);
						this.elts.load
							.css({
								position: 'fixed',
								top: (this.getInternal().fullSize.viewH - this.elts.load.height() - outer.h.margin)/2,
								left: (this.getInternal().fullSize.viewW - this.elts.load.width() - outer.w.margin)/2
							});
						if (this._transition) {
							this._unreposition();
							this._callAnim('showTrans', $.proxy(function() {
								this._contentLoading();
							}, this));
						} else {
							this._callAnim('showLoad', $.proxy(function() {
								this._contentLoading();
							}, this));
						}
					}
				}
			},

			// Write the content in the modal.
			// Content comes from the hidden div, scripts and eventually close button.
			_writeContent: function() {
				this.elts.cont
					.empty()
					.append(this.elts.hidden.contents())
					.append(this._scripts)
					.append(this.showCloseButton ? this.closeButton : '')
					.css({
						position: 'fixed',
						width: this.sizes.w,
						height: this.sizes.h,
						top: (this.getInternal().fullSize.viewH - this.sizes.h - this.sizes.hMargin)/2,
						left: (this.getInternal().fullSize.viewW - this.sizes.w - this.sizes.wMargin)/2
					});
			},

			// Reposition elements with a class nmReposition
			_reposition: function() {
				var elts = this.elts.cont.find('.nmReposition');
				if (elts.length) {
					var space = this.getInternal()._getSpaceReposition();
					elts.each(function() {
						var me = $(this),
							offset = me.offset();
						me.css({
							position: 'fixed',
							top: offset.top - space.top,
							left: offset.left - space.left
						});
					});
					this.elts.cont.after(elts);
				}
				this.elts.cont.css('overflow', 'auto');
				this._callFilters('afterReposition');
			},

			// Unreposition elements with a class nmReposition
			// Exaclty the reverse of the _reposition function
			_unreposition: function() {
				this.elts.cont.css('overflow', '');
				var elts = this.elts.all.find('.nmReposition');
				if (elts.length)
					this.elts.cont.append(elts.removeAttr('style'));
				this._callFilters('afterUnreposition');
			}
		},
		_internal = {
			firstInit: true,
			debug: false,
			stack: [],
			fullSize: {
				w: 0,
				h: 0,
				wW: 0,
				wH: 0,
				viewW: 0,
				viewH: 0
			},
			nyroModal: function(opts, fullObj) {
				if (_internal.firstInit) {
					_internal._container = $('<div />').appendTo($b);
					$w.smartresize($.proxy(_internal._resize, _internal));
					$d.on('keydown.nyroModal', $.proxy(_internal._keyHandler, _internal));
					_internal._calculateFullSize();
					_internal.firstInit = false;
				}
				return this.nmInit(opts, fullObj).each(function() {
					_internal._init($(this).data('nmObj'));
				});
			},
			nmInit: function(opts, fullObj) {
				return this.each(function() {
					var me = $(this);
					if (fullObj)
						me.data('nmObj', $.extend(true, {opener: me}, opts));
					else
						me.data('nmObj',
							me.data('nmObj')
								? $.extend(true, me.data('nmObj'), opts)
								: $.extend(true, {opener: me}, _nmObj, opts));
				});
			},
			nmDestroy: function() {
				return this.each(function() {
					var me = $(this);
					if (me.data('nmObj')) {
						if (me.data('nmObj').destroy())
							me.removeData('nmObj');
					}
				});
			},
			nmCall: function() {
				return this.trigger('nyroModal');
			},

			nmManual: function(url, opts) {
				$('<a />', {href: url}).nyroModal(opts).trigger('nyroModal');
			},
			nmData: function(data, opts) {
				this.nmManual('#', $.extend({data: data}, opts));
			},
			nmObj: function(opts) {
				$.extend(true, _nmObj, opts);
			},
			nmInternal: function(opts) {
				$.extend(true, _internal, opts);
			},
			nmAnims: function(opts) {
				$.extend(true, _animations, opts);
			},
			nmFilters: function(opts) {
				$.extend(true, _filters, opts);
			},
			nmTop: function() {
				if (_internal.stack.length)
					return _internal.stack[_internal.stack.length-1]['nmObj'];
				return undefined;
			},

			_debug: function(msg) {
				if (this.debug && window.console && window.console.log)
					window.console.log(msg);
			},

			_container: undefined,

			_init: function(nm) {
				nm.filters = [];
				$.each(_filters, function(f, obj) {
					if (obj.is && $.isFunction(obj.is) && obj.is(nm)) {
						nm.filters.push(f);
					}
				});
				nm._callFilters('initFilters');
				nm._callFilters('init');
				nm.opener
					.off('nyroModal.nyroModal nmClose.nyroModal nmResize.nyroModal')
					.on({
						'nyroModal.nyroModal': 	function() { nm.open(); return false;},
						'nmClose.nyroModal': 	function() { nm.close(); return false;},
						'nmResize.nyroModal': 	function() { nm.resize(); return false;}
					});
			},

			_scrollWidth: (function() {
				var scrollbarWidth;
				if ($.browser.msie) {
					var $textarea1 = $('<textarea cols="10" rows="2"></textarea>')
							.css({ position: 'absolute', top: -1000, left: -1000 }).appendTo($b),
						$textarea2 = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>')
							.css({ position: 'absolute', top: -1000, left: -1000 }).appendTo($b);
					scrollbarWidth = $textarea1.width() - $textarea2.width();
					$textarea1.add($textarea2).remove();
				} else {
					var $div = $('<div />')
						.css({ width: 100, height: 100, overflow: 'auto', position: 'absolute', top: -1000, left: -1000 })
						.prependTo($b).append('<div />').find('div')
							.css({ width: '100%', height: 200 });
					scrollbarWidth = 100 - $div.width();
					$div.parent().remove();
				}
				return scrollbarWidth;
			})(),

			_selNyroModal: function(obj) {
				return $(obj).data('nmObj') ? true : false;
			},

			_selNyroModalOpen: function(obj) {
				var me = $(obj);
				return me.data('nmObj') ? me.data('nmObj')._open : false;
			},

			_keyHandler: function(e) {
				var nmTop = $.nmTop();
				if (nmTop && nmTop.useKeyHandler) {
					return nmTop.keyHandle(e);
				}
			},
			_pushStack: function(obj) {
				this.stack = $.map(this.stack, function(elA) {
					if (elA['nmOpener'] != obj.get(0))
						return elA;
				});
				this.stack.push({
					nmOpener: obj.get(0),
					nmObj: $(obj).data('nmObj')
				});
			},
			_removeStack: function(obj) {
				this.stack = $.map(this.stack, function(elA) {
					if (elA['nmOpener'] != obj.get(0))
						return elA;
				});
			},
			_resize: function() {
				var opens = $(':nmOpen').each(function() {
					$(this).data('nmObj')._unreposition();
				});
				this._calculateFullSize();
				opens.trigger('nmResize');
			},
			_calculateFullSize: function() {
				this.fullSize = {
					w: $d.width(),
					h: $d.height(),
					wW: $w.width(),
					wH: $w.height()
				};
				this.fullSize.viewW = Math.min(this.fullSize.w, this.fullSize.wW);
				this.fullSize.viewH = Math.min(this.fullSize.h, this.fullSize.wH);
			},
			_getCurCSS: function(elm, name) {
				var ret = parseInt($.css(elm, name, true));
				return isNaN(ret) ? 0 : ret;
			},
			_getOuter: function(elm) {
				elm = elm.get(0);
				var ret = {
					h: {
						margin: this._getCurCSS(elm, 'marginTop') + this._getCurCSS(elm, 'marginBottom'),
						border: this._getCurCSS(elm, 'borderTopWidth') + this._getCurCSS(elm, 'borderBottomWidth'),
						padding: this._getCurCSS(elm, 'paddingTop') + this._getCurCSS(elm, 'paddingBottom')
					},
					w: {
						margin: this._getCurCSS(elm, 'marginLeft') + this._getCurCSS(elm, 'marginRight'),
						border: this._getCurCSS(elm, 'borderLeftWidth') + this._getCurCSS(elm, 'borderRightWidth'),
						padding: this._getCurCSS(elm, 'paddingLeft') + this._getCurCSS(elm, 'paddingRight')
					}
				};

				ret.h.outer = ret.h.margin + ret.h.border;
				ret.w.outer = ret.w.margin + ret.w.border;

				ret.h.inner = ret.h.padding + ret.h.border;
				ret.w.inner = ret.w.padding + ret.w.border;

				ret.h.total = ret.h.outer + ret.h.padding;
				ret.w.total = ret.w.outer + ret.w.padding;

				return ret;
			},
			_getSpaceReposition: function() {
				var	outer = this._getOuter($b),
					ie7 = $.browser.msie && $.browser.version < 8 && !(screen.height <= $w.height()+23);
				return {
					top: $w.scrollTop() - (!ie7 ? outer.h.border / 2 : 0),
					left: $w.scrollLeft() - (!ie7 ? outer.w.border / 2 : 0)
				};
			},

			_getHash: function(url) {
				if (typeof url == 'string') {
					var hashPos = url.indexOf('#');
					if (hashPos > -1)
						return url.substring(hashPos);
				}
				return '';
			},
			_extractUrl: function(url) {
				var ret = {
					url: undefined,
					sel: undefined
				};

				if (url) {
					var hash = this._getHash(url),
						hashLoc = this._getHash(window.location.href),
						curLoc = window.location.href.substring(0, window.location.href.length - hashLoc.length),
						req = url.substring(0, url.length - hash.length);
					ret.sel = hash;
					if (req != curLoc && req != baseHref)
						ret.url = req;
				}
				return ret;
			}
		},
		_animations = {
			basic: {
				showBg: function(nm, clb) {
					nm.elts.bg.css({opacity: 0.7}).show();
					clb();
				},
				hideBg: function(nm, clb) {
					nm.elts.bg.hide();
					clb();
				},
				showLoad: function(nm, clb) {
					nm.elts.load.show();
					clb();
				},
				hideLoad: function(nm, clb) {
					nm.elts.load.hide();
					clb();
				},
				showCont: function(nm, clb) {
					nm.elts.cont.show();
					clb();
				},
				hideCont: function(nm, clb) {
					nm.elts.cont.hide();
					clb();
				},
				showTrans: function(nm, clb) {
					nm.elts.cont.hide();
					nm.elts.load.show();
					clb();
				},
				hideTrans: function(nm, clb) {
					nm.elts.cont.show();
					nm.elts.load.hide();
					clb();
				},
				resize: function(nm, clb) {
					nm.elts.cont.css({
						width: nm.sizes.w,
						height: nm.sizes.h,
						top: (nm.getInternal().fullSize.viewH - nm.sizes.h - nm.sizes.hMargin)/2,
						left: (nm.getInternal().fullSize.viewW - nm.sizes.w - nm.sizes.wMargin)/2
					});
					clb();
				}
			}
		},
		_filters = {
			basic: {
				is: function(nm) {
					return true;
				},
				init: function(nm) {
					if (nm.opener.attr('rev') == 'modal')
						nm.modal = true;
					if (nm.modal)
						nm.closeOnEscape = nm.closeOnClick = nm.showCloseButton = false;
					if (nm.closeOnEscape)
						nm.useKeyHandler = true;
				},
				initElts: function(nm) {
					nm.elts.bg.addClass('nyroModalBg');
					if (nm.closeOnClick)
						nm.elts.bg.off('click.nyroModal').on('click.nyroModal', function(e) {
							e.preventDefault();
							nm.close();
						});
					nm.elts.cont.addClass('nyroModalCont');
					nm.elts.hidden.addClass('nyroModalCont nyroModalHidden');
					nm.elts.load.addClass('nyroModalCont nyroModalLoad');
				},
				error: function(nm) {
					nm.elts.hidden.addClass('nyroModalError');
					nm.elts.cont.addClass('nyroModalError');
					nm._setCont(nm.errorMsg);
				},
				beforeShowCont: function(nm) {
					nm.elts.cont
						.find('.nyroModal').each(function() {
							var cur = $(this);
							cur.nyroModal(nm.getForNewLinks(cur), true);
						}).end()
						.find('.nyroModalClose').on('click.nyroModal', function(e) {
							e.preventDefault();
							nm.close();
						});
				},
				keyHandle: function(nm) {
					// used for escape key
					if (nm.keyEvent.keyCode == 27 && nm.closeOnEscape) {
						nm.keyEvent.preventDefault();
						nm.close();
					}
				}
			},

			custom: {
				is: function(nm) {
					return true;
				}
			}
		};

	// Add jQuery call fucntions
	$.fn.extend({
		nm: _internal.nyroModal,
		nyroModal: _internal.nyroModal,
		nmInit: _internal.nmInit,
		nmDestroy: _internal.nmDestroy,
		nmCall: _internal.nmCall
	});

	// Add global jQuery functions
	$.extend({
		nmManual: _internal.nmManual,
		nmData: _internal.nmData,
		nmObj: _internal.nmObj,
		nmInternal: _internal.nmInternal,
		nmAnims: _internal.nmAnims,
		nmFilters: _internal.nmFilters,
		nmTop: _internal.nmTop
	});

	// Add jQuery selectors
	$.expr[':'].nyroModal = $.expr[':'].nm = _internal._selNyroModal;
	$.expr[':'].nmOpen = _internal._selNyroModalOpen;
});
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  };
	// smartresize
	jQuery.fn[sr] = function(fn){  return fn ? this.on('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
function ucfirst(str) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: ucfirst('kevin van zonneveld');
    // *     returns 1: 'Kevin van zonneveld'
    str += '';
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
}
jQuery(function($, undefined) {
	$.nmAnims({
		fade: {
			showBg: function(nm, clb) {
				nm.elts.bg.fadeTo(250, 0.7, clb);
			},
			hideBg: function(nm, clb) {
				nm.elts.bg.fadeOut(clb);
			},
			showLoad: function(nm, clb) {
				nm.elts.load.fadeIn(clb);
			},
			hideLoad: function(nm, clb) {
				nm.elts.load.fadeOut(clb);
			},
			showCont: function(nm, clb) {
				nm.elts.cont.fadeIn(clb);
			},
			hideCont: function(nm, clb) {
				nm.elts.cont.css('overflow', 'hidden').fadeOut(clb);
			},
			showTrans: function(nm, clb) {
				nm.elts.load
					.css({
						position: nm.elts.cont.css('position'),
						top: nm.elts.cont.css('top'),
						left: nm.elts.cont.css('left'),
						width: nm.elts.cont.css('width'),
						height: nm.elts.cont.css('height'),
						marginTop: nm.elts.cont.css('marginTop'),
						marginLeft: nm.elts.cont.css('marginLeft')
					})
					.fadeIn(function() {
						nm.elts.cont.hide();
						clb();
					});
			},
			hideTrans: function(nm, clb) {
				nm.elts.cont.css('visibility', 'hidden').show();
				nm.elts.load
					.css('position', nm.elts.cont.css('position'))
					.animate({
						top: nm.elts.cont.css('top'),
						left: nm.elts.cont.css('left'),
						width: nm.elts.cont.css('width'),
						height: nm.elts.cont.css('height'),
						marginTop: nm.elts.cont.css('marginTop'),
						marginLeft: nm.elts.cont.css('marginLeft')
					}, function() {
						nm.elts.cont.css('visibility', '');
						nm.elts.load.fadeOut(clb);
					});
			},
			resize: function(nm, clb) {
				nm.elts.cont.animate({
					width: nm.sizes.w,
					height: nm.sizes.h,
					top: (nm.getInternal().fullSize.viewH - nm.sizes.h - nm.sizes.hMargin)/2,
					left: (nm.getInternal().fullSize.viewW - nm.sizes.w - nm.sizes.wMargin)/2
				}, clb);
			}
		}
	});
	// Define fade aniamtions as default
	$.nmObj({anim: {def: 'fade'}});
});
jQuery(function($, undefined) {
	$.nmFilters({
		title: {
			is: function(nm) {
				return nm.opener.is('[title]');
			},
			beforeShowCont: function(nm) {
				var offset = nm.elts.cont.offset();
				nm.store.title = $('<h1 />', {
					text: nm.opener.attr('title')
				}).addClass('nyroModalTitle nmReposition');
				nm.elts.cont.prepend(nm.store.title);
			},
			close: function(nm) {
				if (nm.store.title) {
					nm.store.title.remove();
					nm.store.title = undefined;
					delete(nm.store.title);
				}
			}
		}
	});
});
jQuery(function($, undefined) {
	$.nmFilters({
		gallery: {
			is: function(nm) {
				var ret = nm.opener.is('[rel]:not([rel=external], [rel=nofollow])');
				if (ret) {
					var rel = nm.opener.attr('rel'),
						indexSpace = rel.indexOf(' '),
						gal = indexSpace > 0 ? rel.substr(0, indexSpace) : rel,
						links = $('[href][rel="'+gal+'"], [href][rel^="'+gal+' "]');
					if (links.length < 2)
						ret = false;
					if (ret && nm.galleryCounts && !nm._hasFilter('title'))
						nm.filters.push('title');
				}
				return ret;
			},
			init: function(nm) {
				nm.useKeyHandler = true;
			},
			keyHandle: function(nm) {
				// used for arrows key
				if (!nm._animated && nm._opened) {
					if (nm.keyEvent.keyCode == 39 || nm.keyEvent.keyCode == 40) {
						nm.keyEvent.preventDefault();
						nm._callFilters('galleryNext');
					} else if (nm.keyEvent.keyCode == 37 || nm.keyEvent.keyCode == 38) {
						nm.keyEvent.preventDefault();
						nm._callFilters('galleryPrev');
					}
				}
			},
			initElts: function(nm) {
				var rel = nm.opener.attr('rel'),
					indexSpace = rel.indexOf(' ');
				nm.store.gallery = indexSpace > 0 ? rel.substr(0, indexSpace) : rel;
				nm.store.galleryLinks = $('[href][rel="'+nm.store.gallery+'"], [href][rel^="'+nm.store.gallery+' "]');
				nm.store.galleryIndex = nm.store.galleryLinks.index(nm.opener);
			},
			beforeShowCont: function(nm) {
				if (nm.galleryCounts && nm.store.title && nm.store.galleryLinks && nm.store.galleryLinks.length > 1) {
					var curTitle = nm.store.title.html();
					nm.store.title.html((curTitle.length ? curTitle+' - ' : '')+(nm.store.galleryIndex+1)+'/'+nm.store.galleryLinks.length);
				}
			},
			filledContent: function(nm) {
				var link = this._getGalleryLink(nm, -1),
					append = nm.elts.hidden.find(' > div');
				if (link) {
					$('<a />', {
							text: 'previous',
							href: '#'
						})
						.addClass('nyroModalPrev')
						.on('click', function(e) {
							e.preventDefault();
							nm._callFilters('galleryPrev');
						})
						.appendTo(append);
				}
				link = this._getGalleryLink(nm, 1);
				if (link) {
					$('<a />', {
							text: 'next',
							href: '#'
						})
						.addClass('nyroModalNext')
						.on('click', function(e) {
							e.preventDefault();
							nm._callFilters('galleryNext');
						})
						.appendTo(append);
				}
			},
			close: function(nm) {
				nm.store.gallery = undefined;
				nm.store.galleryLinks = undefined;
				nm.store.galleryIndex = undefined;
				delete(nm.store.gallery);
				delete(nm.store.galleryLinks);
				delete(nm.store.galleryIndex);
				if (nm.elts.cont)
					nm.elts.cont.find('.nyroModalNext, .nyroModalPrev').remove();
			},
			galleryNext: function(nm) {
				this._getGalleryLink(nm, 1).nyroModal(nm.getForNewLinks(), true).click();
			},
			galleryPrev: function(nm) {
				this._getGalleryLink(nm, -1).nyroModal(nm.getForNewLinks(), true).click();
			},
			_getGalleryLink: function(nm, dir) {
				if (nm.store.gallery) {
					if (!nm.ltr)
						dir *= -1;
					var index = nm.store.galleryIndex + dir;
					if (nm.store.galleryLinks && index >= 0 && index < nm.store.galleryLinks.length)
						return nm.store.galleryLinks.eq(index);
					else if (nm.galleryLoop && nm.store.galleryLinks)
						return nm.store.galleryLinks.eq(index<0 ? nm.store.galleryLinks.length-1 : 0);
				}
				return undefined;
			}
		}
	});
});
jQuery(function($, undefined) {
	$.nmFilters({
		link: {
			is: function(nm) {
				var ret = nm.opener.is('[href]');
				if (ret)
					nm.store.link = nm.getInternal()._extractUrl(nm.opener.attr('href'));
				return ret;
			},
			init: function(nm) {
				nm.loadFilter = 'link';
				nm.opener.off('click.nyroModal').on('click.nyroModal', function(e) {
					e.preventDefault();
					nm.opener.trigger('nyroModal');
				});
			},
			load: function(nm) {
				$.ajax($.extend(true, {}, nm.ajax || {}, {
					url: nm.store.link.url,
					data: nm.store.link.sel ? [{name: nm.selIndicator, value: nm.store.link.sel.substring(1)}] : undefined,
					success: function(data) {
						nm._setCont(data, nm.store.link.sel);
					},
					error: function(jqXHR) {
						nm._error(jqXHR);
					}
				}));
			},
			destroy: function(nm) {
				nm.opener.off('click.nyroModal');
			}
		}
	});
});
jQuery(function($, undefined) {
	$.nmFilters({
		dom: {
			is: function(nm) {
				return nm._hasFilter('link') && !nm.store.link.url && nm.store.link.sel;
			},
			init: function(nm) {
				nm.loadFilter = 'dom';
			},
			load: function(nm) {
				nm.store.domEl = $(nm.store.link.sel);
				if (nm.store.domEl.length)
					nm._setCont(nm.domCopy ? nm.store.domEl.html() : nm.store.domEl.contents());
				else
					nm._error();
			},
			close: function(nm) {
				if (!nm.domCopy && nm.store.domEl && nm.elts.cont)
					nm.store.domEl.append(nm.elts.cont.find('.nyroModalDom').contents());
			}
		}
	});
});
jQuery(function($, undefined) {
	$.nmFilters({
		data: {
			is: function(nm) {
				var ret = nm.data ? true : false;
				if (ret)
					nm._delFilter('dom');
				return ret;
			},
			init: function(nm) {
				nm.loadFilter = 'data';
			},
			load: function(nm) {
				nm._setCont(nm.data);
			}
		}
	});
});
jQuery(function($, undefined) {
	$.nmFilters({
		image: {
			is: function(nm) {
				return (new RegExp(nm.imageRegex, 'i')).test(nm.opener.attr('href'));
			},
			init: function(nm) {
				nm.loadFilter = 'image';
			},
			load: function(nm) {
				var url = nm.opener.attr('href');
				$('<img />')
					.load(function() {
						nm.elts.cont.addClass('nyroModalImg');
						nm.elts.hidden.addClass('nyroModalImg');
						nm._setCont(this);
					}).error(function() {
						nm._error();
					})
					.attr('src', url);
			},
			size: function(nm) {
				if (nm.sizes.w != nm.sizes.initW || nm.sizes.h != nm.sizes.initH) {
					var ratio = Math.min(nm.sizes.w/nm.sizes.initW, nm.sizes.h/nm.sizes.initH);
					nm.sizes.w = nm.sizes.initW * ratio;
					nm.sizes.h = nm.sizes.initH * ratio;
				}
				var img = nm.loading ? nm.elts.hidden.find('img') : nm.elts.cont.find('img');
				img.attr({
					width: nm.sizes.w,
					height: nm.sizes.h
				});
			},
			close: function(nm) {
				if (nm.elts.cont) {
					nm.elts.cont.removeClass('nyroModalImg');
					nm.elts.hidden.removeClass('nyroModalImg');
				}
			}
		}
	});
});
jQuery(function($, undefined) {
	$.nmFilters({
		swf: {
			idCounter: 1,
			is: function(nm) {
				return nm._hasFilter('link') && nm.opener.is('[href$=".swf"]');
			},
			init: function(nm) {
				nm.loadFilter = 'swf';
			},
			load: function(nm) {
				if (!nm.swfObjectId)
					nm.swfObjectId = 'nyroModalSwf-'+(this.idCounter++);
				var url = nm.store.link.url,
					cont = '<div><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="'+nm.swfObjectId+'" width="'+nm.sizes.w+'" height="'+nm.sizes.h+'"><param name="movie" value="'+url+'"></param>',
					tmp = '';
				$.each(nm.swf, function(name, val) {
					cont+= '<param name="'+name+'" value="'+val+'"></param>';
					tmp+= ' '+name+'="'+val+'"';
				});
				cont+= '<embed src="'+url+'" type="application/x-shockwave-flash" width="'+nm.sizes.w+'" height="'+nm.sizes.h+'"'+tmp+'></embed></object></div>';
				nm._setCont(cont);
			}
		}
	});
});
jQuery(function($, undefined) {
	$.nmFilters({
		form: {
			is: function(nm) {
				var ret = nm.opener.is('form');
				if (ret)
					nm.store.form = nm.getInternal()._extractUrl(nm.opener.attr('action'));
				return ret;
			},
			init: function(nm) {
				nm.loadFilter = 'form';
				nm.opener.off('submit.nyroModal').on('submit.nyroModal', function(e) {
					e.preventDefault();
					nm.opener.trigger('nyroModal');
				});
			},
			load: function(nm) {
				var data = {};
				$.map(nm.opener.serializeArray(), function(d) {
					data[d.name] = d.value;
				});
				if (nm.store.form.sel)
					data[nm.selIndicator] = nm.store.form.sel.substring(1);
				$.ajax($.extend(true, { type : 'get', dataType : 'text' }, nm.ajax || {}, {
					url: nm.store.form.url,
					data: data,
					type: nm.opener.attr('method') ? nm.opener.attr('method') : undefined,
					success: function(data) {
						nm._setCont(data, nm.store.form.sel);
					},
					error: function(jqXHR) {
						nm._error(jqXHR);
					}
				}));
			},
			destroy: function(nm) {
				nm.opener.off('submit.nyroModal');
			}
		}
	});
});
jQuery(function($, undefined) {
	$.nmFilters({
		formFile: {
			is: function(nm) {
				var ret = nm.opener.is('form[enctype="multipart/form-data"]');
				if (ret) {
					nm._delFilter('form');
					if (!nm.store.form)
						nm.store.form = nm.getInternal()._extractUrl(nm.opener.attr('action'));
				}
				return ret;
			},
			init: function(nm) {
				nm.loadFilter = 'formFile';
				nm.store.formFileLoading = false;
				nm.opener.off('submit.nyroModal').on('submit.nyroModal', function(e) {
					if (!nm.store.formFileIframe) {
						e.preventDefault();
						nm.opener.trigger('nyroModal');
					} else {
						nm.store.formFileLoading = true;
					}
				});
			},
			initElts: function(nm) {
				var inputSel;
				if (nm.store.form.sel)
					inputSel = $('<input type="hidden" />', {
						name: nm.selIndicator,
						value: nm.store.form.sel.substring(1)
					}).appendTo(nm.opener);
				function rmFormFileElts() {
					if (inputSel) {
						inputSel.remove();
						inputSel = undefined;
						delete(inputSel);
					}
					nm.store.formFileIframe.attr('src', 'about:blank').remove();
					nm.store.formFileIframe = undefined;
					delete(nm.store.formFileIframe);
				}
				nm.store.formFileIframe = $('<iframe />')
					.attr({
						name: 'nyroModalFormFile',
						src: 'javascript:\'\';',
						id: 'nyromodal-iframe-'+(new Date().getTime()),
						frameborder: '0'
					})
					.hide()
					.load(function() {
						if (nm.store.formFileLoading) {
							nm.store.formFileLoading = false;
							var content = nm.store.formFileIframe
									.off('load error')
									.contents().find('body').not('script[src]');
							if (content && content.html() && content.html().length) {
								rmFormFileElts();
								nm._setCont(content.html(), nm.store.form.sel);
							} else {
								// Not totally ready, try it in a few secs
								var nbTry = 0,
									fct = function() {
										nbTry++;
										var content = nm.store.formFileIframe
												.off('load error')
												.contents().find('body').not('script[src]');
										if (content && content.html() && content.html().length) {
											nm._setCont(content.html(), nm.store.form.sel);
											rmFormFileElts();
										} else if (nbTry < 5) {
											setTimeout(fct, 25);
										} else {
											rmFormFileElts();
											nm._error();
										}
									};
								setTimeout(fct, 25);
							}
						}
					})
					.error(function() {
						rmFormFileElts();
						nm._error();
					});
				nm.elts.all.append(nm.store.formFileIframe);
				nm.opener
					.attr('target', 'nyroModalFormFile')
					.submit();
			},
			close: function(nm) {
				nm.store.formFileLoading = false;
				if (nm.store.formFileIframe) {
					nm.store.formFileIframe.remove();
					nm.store.formFileIframe = undefined;
					delete(nm.store.formFileIframe);
				}
			},
			destroy: function(nm) {
				nm.opener.off('submit.nyroModal')
			}
		}
	});
});
jQuery(function($, undefined) {
	$.nmFilters({
		iframe: {
			is: function(nm) {
				var	target = nm.opener.attr('target') || '',
					rel = nm.opener.attr('rel') || '',
					opener = nm.opener.get(0);
				return !nm._hasFilter('image') && (target.toLowerCase() == '_blank'
					|| rel.toLowerCase().indexOf('external') > -1
					|| (opener.hostname && opener.hostname.replace(/:\d*$/,'') != window.location.hostname.replace(/:\d*$/,'')));
			},
			init: function(nm) {
				nm.loadFilter = 'iframe';
			},
			load: function(nm) {
				nm.store.iframe = $('<iframe />')
					.attr({
						src: 'javascript:\'\';',
						id: 'nyromodal-iframe-'+(new Date().getTime()),
						frameborder: '0'
					});
				nm._setCont(nm.store.iframe);
			},
			afterShowCont: function(nm) {
				nm.store.iframe.attr('src', nm.opener.attr('href'));
			},
			close: function(nm) {
				if (nm.store.iframe) {
					nm.store.iframe.remove();
					nm.store.iframe = undefined;
					delete(nm.store.iframe);
				}
			}
		}
	});
});
jQuery(function($, undefined) {
	$.nmFilters({
		iframeForm: {
			is: function(nm) {
				var ret = nm._hasFilter('iframe') && nm.opener.is('form');
				if (ret) {
					nm._delFilter('iframe');
					nm._delFilter('form');
				}
				return ret;
			},
			init: function(nm) {
				nm.loadFilter = 'iframeForm';
				nm.store.iframeFormLoading = false;
				nm.store.iframeFormOrgTarget = nm.opener.attr('target');
				nm.opener.off('submit.nyroModal').on('submit.nyroModal', function(e) {
					if (!nm.store.iframeFormIframe) {
						e.preventDefault();
						nm.opener.trigger('nyroModal');
					} else {
						nm.store.iframeFormLoading = true;
					}
				});
			},
			load: function(nm) {
				nm.store.iframeFormIframe = $('<iframe />')
					.attr({
						name: 'nyroModalIframeForm',
						src: 'javascript:\'\';',
						id: 'nyromodal-iframe-'+(new Date().getTime()),
						frameborder: '0'
					});
				nm._setCont(nm.store.iframeFormIframe);
			},
			afterShowCont: function(nm) {
				nm.opener
					.attr('target', 'nyroModalIframeForm')
					.submit();
			},
			close: function(nm) {
				nm.store.iframeFormOrgTarget ? nm.opener.attr('target', nm.store.iframeFormOrgTarget) : nm.opener.removeAttr('target');
				delete(nm.store.formFileLoading);
				delete(nm.store.iframeFormOrgTarget);
				if (nm.store.iframeFormIframe) {
					nm.store.iframeFormIframe.remove();
					nm.store.iframeFormIframe = undefined;
					delete(nm.store.iframeFormIframe);
				}
			},
			destroy: function(nm) {
				nm.opener.off('submit.nyroModal')
			}
		}
	});
});
jQuery(function($, undefined) {
	$.nmObj({
		embedlyUrl: 'http://api.embed.ly/1/oembed',
		embedly: {
			key: undefined,
			wmode: 'transparent',
			allowscripts: true,
			format: 'json'
			
			/*
			maxwidth: 400,
			maxheight: 400,
			width: 400,
			nostyle: false,
			autoplay: false,
			videosrc: false,
			words: 50,
			chars: 100
			*/
		}
	});
	var cache = [];
	$.nmFilters({
		embedly: {
			is: function(nm) {
				if (nm._hasFilter('link') && nm._hasFilter('iframe') && nm.opener.attr('href') && nm.embedly.key) {
					if (cache[nm.opener.attr('href')]) {
						nm.store.embedly = cache[nm.opener.attr('href')];
						nm._delFilter('iframe');
						return true;
					}
					nm.store.embedly = false;
					var data = nm.embedly;
					data.url = nm.opener.attr('href');
					$.ajax({
						url: nm.embedlyUrl,
						dataType: 'jsonp',
						data: data,
						success: function(data) {
							if (data.type != 'error' && data.html) {
								nm.store.embedly = data;
								cache[nm.opener.attr('href')] = data;
								nm._delFilter('iframe');
								nm.filters.push('embedly');
								nm._callFilters('initFilters');
								nm._callFilters('init');
							}
						}
					});
				}
				return false;
			},
			init: function(nm) {
				nm.loadFilter = 'embedly';
			},
			load: function(nm) {
				if (nm.store.embedly.type == 'photo') {
					nm.filters.push('image');
					$('<img />')
						.load(function() {
							nm.elts.cont.addClass('nyroModalImg');
							nm.elts.hidden.addClass('nyroModalImg');
							nm._setCont(this);
						}).error(function() {
							nm._error();
						})
						.attr('src', nm.store.embedly.url);
				} else {
					nm._setCont('<div>'+nm.store.embedly.html+'</div>');
				}
			},
			size: function(nm) {
				if (nm.store.embedly.width && !nm.sizes.height) {
					nm.sizes.w = nm.store.embedly.width;
					nm.sizes.h = nm.store.embedly.height;
				}
			}
		}
	});
});



/*==============================================
 JQUERY OUTER HTML (PLUGIN)
 - Ca-Phun Ung
------------------------------------------------
 jQuery plugin to select element's HTML
 http://www.yelotofu.com/2008/08/jquery-outerhtml/
----------------------------------------------*/
jQuery.fn.outerHTML = function(s) {
    return s ? this.before(s).remove() : jQuery("<p>").append(this.eq(0).clone()).html();
};



/*==============================================
 Name:		Localization - Translate Page
 Author:	Steve Brush
 Version:	1.0
------------------------------------------------
 Details:	Translates a page based on a JSON object
 Usage: 	$(selector).replaceAll(find,replace);
 Requires:	jQuery.replaceAll();
----------------------------------------------*/
;(function($) {
	$.fn.translate = function(terms, callback) {
	
		var length = this.length,
			allContainers = this,
			container, nodes, _old, _new, escapedKey, regex;
		
		var finish = function() {
			callback(allContainers);
		};
		
		return allContainers.each(function(i) {
		
			container = $(this);
			nodes = container.find(':not(iframe,script,.no-trans)').andSelf().contents().filter(function() {
				return this.nodeType == 3 && trim(this.data) != "";
			});
			
			var nodesLength = nodes.length,
			termsLength = terms.length,
			node,term,text;
			for (var n=0; n<nodesLength; n++) {
				node = nodes[n];
				text = node.data;
				
				for (var t=0; t<termsLength; t++) {
					_old = terms[t].en;
					_new = terms[t].fr;
					if (text.indexOf(_old)>-1) {
						escapedKey = RegExp.escape(_old);
						regex = new RegExp(escapedKey,'g');
						node.nodeValue = text.replace(regex,_new);
						break;
					}
				}
			}
			if (i==length-1) finish();
		});
	};
})(jQuery);



/*==============================================
 Name:		Localization - Format Currency
 Author:	Steve Brush
 Version:	1.0
------------------------------------------------
 Details:	Formats currency based on selected language
 Usage:		$(selector).formatCurrency(language);
----------------------------------------------*/
;(function($) {
	$.fn.formatCurrency = function() {
		return this.each(function() {
			return $(this).find(":not(iframe,script)").andSelf().contents().filter(function() {
				var text = $(this).text();
				if (this.nodeType == 3 && text.indexOf('CAN$')>-1) {
					var thisText = $(this).text().split('CAN$');
					var firstBit = thisText[0];
					var secondBit = "";
					if (typeof thisText[1] != "undefined") {
						secondBit = thisText[1];
						secondBit = secondBit.replace(',','\u00A0').replace('.00','').replace('.',',');
						secondBit += "\u00A0CAN\u00A0$";
					}
					this.nodeValue = firstBit+secondBit;
				}
			});				
		});
	}
})(jQuery);


/*==============================================
 Name:		Localization - Format Dates
 Author:	Steve Brush
 Version:	1.0
------------------------------------------------
 Details:	Formats dates based on selected language
 Usage:		$(selector).formatDates(language);
----------------------------------------------*/
;(function($) {
	$.fn.formatDates = function() {
		return this.each(function() {
			var text, node,
				nodes = $(this).find(":not(iframe,script)").andSelf().contents().filter(function() {
					node = $(this);
					text = node.text();
					return(text.length && this.nodeType == 3 && text.split('/').length > 2 && text.indexOf('http') == -1 && text.indexOf('MM') == -1 && text.indexOf('mm') == -1);
				});
			var labelText, dateNums, length = nodes.length;
			for (var i=0; i<length; i++) {
				node = nodes[i];
				text = $(node).text();
				if (text.indexOf('(')>-1 && text.indexOf('T)') == -1) {
					labelText 		= text.split('(');
					dateNums 		= labelText[1].split(')')[0].split('/');
					node.nodeValue 	= labelText[0]+' ('+dateNums[1]+'/'+dateNums[0]+'/'+dateNums[2]+')';
				} 
				else {
					dateNums 		= text.split('/');
					node.nodeValue 	= dateNums[1]+'/'+dateNums[0]+'/'+dateNums[2];
				}
			}
		});
	}
})(jQuery);