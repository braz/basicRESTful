function setup(app, handlers) {
	app.post('/api/user', handlers.user.createUser);
	app.get('/api/user/:id', handlers.user.getUser);
	app.put('/api/user/:id', handlers.user.updateUser);
	app.del('/api/user/:id', handlers.user.deleteUser);
}
 
exports.setup = setup;