/*
 * parsley.generalValidation.js was thought for late adapters of Parsley. 
 * It allows you to verify your form inputs frontend side, without modifyng your - already - wrote HTML files.
 * It ONLY work with basic types and validations. If you want more functionality you MUST implement parsley from a scratch.
 * Author: Gonzalo Naveira - @gonzalon
*/

//Only basic types and validators.
$.fn.parsley.mapping = {
	//Types
	'alphanum': 	{'parsley-type':		'alphanum'},
	'email':		{'parsley-type':		'email'},
	'url':			{'parsley-type':		'url'},
	'number':		{'parsley-type':		'number'},
	'digits':		{'parsley-type':		'digits'},
	'dateIso':		{'parsley-type':		'dateIso'},
	'phone':		{'parsley-type':		'phone'},

	//Validators
	'required': 	{'parsley-required':	'true'},				
	'notblank':		{'parsley-notblank':	'true'},
	'minlength':	{'parsley-minlength': 	'?'},
	'maxlength':	{'parsley-maxlength': 	'?'},
	'min':			{'parsley-min':		 	'?'},		
	'max':			{'parsley-max':		 	'?'}
}

//Only inputs and textareas
$.fn.parsley.fields = 'input:visible, textarea:visible';

!function ($) {
	$.fn.generalValidation = function( validationRules ) {
		
		var name, validations, validationName, validationValue, att, key, value
		, form = $( this )
		, addValidations = function( validationRules ){
			if(validationRules === undefined){
				console.log('Error!!! You need to add the validation rules parameter');
				validationRules = {};
			}
			$( form ).find( $.fn.parsley.fields ).each(function(){
				name = $( this ).attr('name');
				validations = validationRules[name];

				if(validations == undefined) return true;
				
				for(validation in validations){
					validationName = validations[validation];
					validationValue = '';
					if(validationName.indexOf(':') !== -1){
						validationValue = validationName.substr(validationName.indexOf(':')+1, validationName.length);
						validationName = validationName.substr(0, validationName.indexOf(':'));
					}

					att = $.fn.parsley.mapping[validationName];
					if(att !== undefined){
						$.map(att, function (v, k) { key = k; value = v; });
						value = (value === '?') ? validationValue : value;
						$(this).attr(key, value);
					}
				}
			});
			return true;
		}
		, callParsley = function( form ) {
			form.parsley();
		};
		
		if(addValidations( validationRules )){
			callParsley( form );
		}
	}
} ( window.jQuery );
