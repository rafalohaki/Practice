// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		title: 'Arya Varaste',
		Link: 'http://google.com'
	},
	methods: {
		satHello: function () {
			this.title = "VARASTE";
			return this.title;
		}
	}
})