var lock = null;
$(document).ready(function() {
 lock = new Auth0Lock('J59CQkia23C5JracpQNbyKch2L5E9ZFR', '14bit.auth0.com');
});

var userProfile;

$('.btn-login').click(function(e) {
  e.preventDefault();
  lock.show({ authParams: { scope: 'openid' } });
});

var hash = lock.parseHash(window.location.hash);
if (hash) {
  if (hash.error) {
    console.log("There was an error logging in", hash.error);
    alert('There was an error: ' + hash.error + '\n' + hash.error_description);
  } else {
    //save the token in the session:
    localStorage.setItem('id_token', hash.id_token);
  }
}
