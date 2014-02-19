/*
	* Parsley.generalValidation.js was thought for late adapters of Parsley. 
	* It allows you to verify your form inputs front-end side, without modifying your - already - wrote HTML files.
	* It ONLY work with basic types and validations. If you want more functionality you MUST implement parsley from a scratch.
	* Author: Gonzalo Naveira - @gonzalon
*/
!function ($) {
//Only inputs and textareas
$.fn.parsley.fields = 'input:visible, textarea:visible';

$.fn.generalValidation = function( validationRules ) {

	var form = $( this ),
	getAttribute = function(validationName){
		var attribute = {}, keyName, attributeValue,
		mapping = ['required', 'notblank', 'minlength', 'maxlength', 'min', 'max'];
		if(mapping.indexOf(validationName) === -1 ){
			keyName = 'parsley-type';
			attributeValue = validationName;
		}else{
			keyName = 'parsley-'+validationName;
			attributeValue = 'true';
		}
		attribute[keyName] = attributeValue;
		return attribute;
	},
	addValidations = function( validationRules ){
		var name, validations, validationName, validationValue, att, key, value;
		if(validationRules === undefined){
			console.log('Error!!! You need to add the validation rules parameter');
			return false;
		}
		$( form ).find( $.fn.parsley.fields ).each(function(){
			name = $( this ).attr('name');
			validations = validationRules[name];
			if(validations === undefined)	return true;
			
			for(var i = 0; i < validations.length; i++){
				validationName = validations[i];
				validationValue = '';
				if(validationName.indexOf(':') !== -1){
					validationValue = validationName.substr(validationName.indexOf(':')+1, validationName.length);
					validationName = validationName.substr(0, validationName.indexOf(':'));
				}
				att = getAttribute(validationName);
				$.map(att, function (v, k) { key = k; value = v; });
				value = (validationValue === '') ? value : validationValue;
				$(this).attr(key, value);
			}
		});
		return true;
	};
	if(addValidations( validationRules )){
		form.parsley();
	}
};
} ( window.jQuery );
