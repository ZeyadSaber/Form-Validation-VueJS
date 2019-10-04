const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    name: null,
    email: null,
    pass: null,
    rpass: null
  },
  methods:{
    checkForm: function (e) {

      this.errors = [];

      if (!this.name){
        this.errors.push('Name required.');
      }
      if(this.name.length < 5 && this.name){
        this.errors.push('Name must be of 5 characters at least.');
      }
      if(this.name.length > 15){
        this.errors.push("Name can't exceed 15 characters." );
      }
      console.log('before-email');
      if (!this.email) {
        console.log('hi-email');
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        console.log('hi-email2');
        this.errors.push('Valid email required.');
      }
      if(!this.pass){
        this.errors.push('Password required.');
      }
      if(!this.rpass){
        this.errors.push('Please Re-enter your password.');
      }
      if(this.pass != this.rpass && this.pass && this.rpass){
        this.errors.push('Re-enter your password correctly.');
      }
      console.log('hi');
console.log(this.errors.length);
      if (!this.errors.length) {
        console.log('welcome errors ');
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
})