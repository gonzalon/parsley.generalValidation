Parsley - General Validation
=========================

A wrapper for use general data type and basic validations of Parsley.js library without modyfing the HTML forms.

The script automatically bind the set of rules you define to a form.

Remember, this is only for basic data types and basic validations. If you want more flexibility and power you must implement `Parsley.js`.

## Example of HTML form

```html
<form id="demo-form" no-validate role="form">
	<div class="form-group">
		<label for="fullname">Full Name * :</label>
		<input type="text" id="fullname" name="fullname"  />
	</div>
	<div class="form-group">
		<label for="email">Email * :</label>
		<input type="email" id="email" name="email" />
	</div>
	<div class="form-group">
		<label for="website">Website :</label>
		<input type="text" id="website" name="website" />
	</div>
	<div class="form-group">
		<label for="message">Message (20 chars min, 200 max) :</label>
		<textarea id="message" name="message" ></textarea>
	</div>
	<input type="hidden" name="superhidden" id="superhidden">
	<br/>
	<span class="btn btn" id="demo-form-valid" onclick="javascript:$('#demo-form').parsley( 'validate' );">
		<i class="icon-ok"></i>
	</span>
</form>
```

## Example of validation rules

```js
var validationRules = {
  fullname: 	['required', 'alphanum', 'maxlength:20'], 
  email: 		['required', 'email'],
  website:		['url'],
  message: 		['required', 'minlength:20']
}

$('#demo-form').generalValidation( validationRules );
```
		
See `'test/test.html'` for a working example.

## Data Type supported

It only supoort this data types:
- alphanum
- email
- url
- number
- digits
- dateIso
- phone


## Validators supported
It only supoort this validators:
- required
- notblank
- minlength
- maxlength
- min
- max

#Requirements
- [See Parsley.js requirements](https://github.com/guillaumepotier/Parsley.js#min-requirements)
