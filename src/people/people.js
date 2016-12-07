Polymer({
  is: "congress-members",
  properties: {
    headers: {
      type: Object,
      value: {'X-API-Key': process.env.CONGRESS}
    },
    congressmembers: {
      type: Array,
      value: []
    },
    data: {
      type: Array,
      notify: true
    },
    isRepublican: {
      type: Boolean,
      value: false
    }
  },
  handleResponse: function(request) {
    data = (request.detail.response).results;
    members = data[0].members;
    this.congressmembers = members;
  },
  attached: function() {
    this.$.congressmembers.generateRequest();
  },
  changeHandler: function() {
    this.isRepublican = this.$.republican.checked
    console.log('hello')
  },
  computeFilter: function(bool) {
    if(!bool) {
      return null;
    } else {
      return function(congressmember) {
        return congressmember.party == 'R'
      }
    }
  }
})
