$("#login").click(function(){
	fetch('https://jsonplaceholder.typicode.com/users?username=' + $('#username').val())
		.then(function(response){
			return response.json();
		})
		.then(function(json){
			var user = json[0];

			$("#login-form").hide();
			$("#homepage").show();

			$("#name").html(user.name);

			var userPosts = fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id);
			var userAlbums = fetch('https://jsonplaceholder.typicode.com/albums?userId=' + user.id);

			return Promise.all([userPosts, userAlbums]);
		})
		.then(function(results){
			var posts = results[0];
			var albums = results[1];

			posts.forEach(function(post){
				var li = $('<li></li>');
				li.text(post.title);
				$("#posts").append(li);
			})

		.then(function(albums){
			albums.forEach(function(album){
				var li = $('<li></li>');
				li.text(album.title);
				$('#albums').append(li);
			})
		})
		.catch(function(error){
			alert(error);
		})


		})


		.then(function(response){
			return response.json();
		})
		.then(function(posts){
			posts.forEach(function(post){
				var li = $('<li></li>');
				li.text(post.title);
				$("#posts").append(li);
			})

			return fetch('https://jsonplaceholder.typicode.com/albums?userId=' + posts[0].userId)
		})
		.then(function(response){
			return response.json();
		})
		.then(function(albums){
			albums.forEach(function(album){
				var li = $('<li></li>');
				li.text(album.title);
				$('#albums').append(li);
			})
		})
		.catch(function(error){
			alert(error);
		})
})