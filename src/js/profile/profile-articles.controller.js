class ProfileArticlesCtrl {
  constructor(profile, Articles, $state, $rootScope) {
    'ngInject';

    // The profile for this page, resolved by UI Router
    this.profile = profile;

    this.profileState = $state.current.name.replace('app.profile.', '');


  }
}


export default ProfileArticlesCtrl;
