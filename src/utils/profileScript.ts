import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export const profileScript = () => {
  const countryPhoneInput = document.querySelector<HTMLInputElement>('#Phone'),
    dialCode = document.querySelector<HTMLInputElement>('.dialCode'),
    errorMsg = document.querySelector('#error-msg'),
    validMsg = document.querySelector('#valid-msg');

  if (!countryPhoneInput || !dialCode || !errorMsg || !validMsg) return;
  const iti = intlTelInput(countryPhoneInput, {
    initialCountry: 'us',
    placeholderNumberType: 'FIXED_LINE',
  });

  const updateInputValue = function () {
    dialCode.value = '+' + iti.getSelectedCountryData().dialCode;
  };
  countryPhoneInput.addEventListener('input', updateInputValue, false);
  countryPhoneInput.addEventListener('countrychange', updateInputValue, false);

  const errorMap = [
    'Invalid number',
    'Invalid country code',
    'Too short',
    'Too long',
    'Invalid number',
  ];

  const reset = function () {
    countryPhoneInput.classList.remove('error');
    errorMsg.innerHTML = '';
    errorMsg.classList.add('hide');
    validMsg.classList.add('hide');
  };

  countryPhoneInput.addEventListener('blur', function () {
    reset();
    if (countryPhoneInput.value.trim()) {
      if (iti.isValidNumber()) {
        validMsg.classList.remove('hide');
        setTimeout(() => {
          validMsg.classList.add('hide');
        }, 1000);
      } else {
        countryPhoneInput.classList.add('error');
        const errorCode = iti.getValidationError();
        errorMsg.innerHTML = errorMap[errorCode];
        errorMsg.classList.remove('hide');
      }
    }
  });

  countryPhoneInput.addEventListener('change', reset);
  countryPhoneInput.addEventListener('keyup', reset);
  $('.iti.iti--allow-dropdown').css({ width: '100%' });
  // console.log($('.iti.iti--allow-dropdown'));
};
