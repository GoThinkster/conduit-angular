class SettingsCtrl {
  constructor(User, $state, $rootScope) {
    'ngInject';

    this._User = User;
    this._$state = $state;

    this.formData = {
       email: User.current.email,
       bio: User.current.bio,
       image: User.current.image,
       username: User.current.username
    };

    // Bind is req'd because the logout method assumes
    // the execution context is within the User object.
    this.logout = User.logout.bind(User);

  }

  submitForm() {
    this.isSubmitting = true;
    this._User.update(this.formData).then(
      (user) => {
        this._$state.go('app.profile', {username:user.username});
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }

}


export default SettingsCtrl;
