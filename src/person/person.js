Polymer({
  is: 'congress-member',
  properties: {
    firstName: {
      type: String,
      value: 'empty'
    },
    lastName: {
      type: String,
      value: ''
    },
    seniority: {
      type: String,
      value: ''
    },
    party: {
      type: String,
      value: ''
    }
  },
  attached: function() {
    this.data
  },
  change: function() {
    console.log('change!')
  }
})
