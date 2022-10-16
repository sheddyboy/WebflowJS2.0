import { draftScript } from '$utils/draftScript';
import { profileScript } from '$utils/profileScript';

window.Webflow ||= [];
window.Webflow.push(() => {
  $('.new-ad-link').on('click', () => {
    window.location.href = window.location.origin + '/new-property';
  });
  draftScript();
  profileScript();
});
