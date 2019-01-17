export default function (context) {
  var userData = context.store.getters.getUserData;
  if (!userData || (Number(userData.accessRight) <= 100)) {
    context.redirect('/');
  }
}
