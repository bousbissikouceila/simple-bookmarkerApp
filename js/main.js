// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);
// Save bookmark
function saveBookmark(e) {
    // Get from values
    var siteName = document.getElementById('site-name').value;
    var siteUrl = document.getElementById('site-url').value;

    var bookmark = {
        name: siteName,
        url: siteUrl,
        date: new Date().toDateString()
    }

    // Test if bookmarks exists
    if (localStorage.getItem('bookmarks') === null) {
        // Initilize array
        var bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    } else {
        // Get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmzrk to array
        bookmarks.push(bookmark);
        // Re-set back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }
    // reset the display
    fetchBookmarks();

    // Prevent form from submitting
    e.preventDefault();
}
// Delete bookmark
function deleteBookmark(name, url) {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Search for the match
    var bool = false;
    var i = 0;
    while (!bool && i < bookmarks.length) {
        if (name === bookmarks[i].name && url === bookmarks[i].url) {
            bool = true;
            // Remove the object
            bookmarks.splice(i, 1);
            //re-set the bookmarks on localStorage
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        }
        i++;
    }
    // reset the display
    fetchBookmarks();
}
// Display bookmarks
function fetchBookmarks() {
    // Get Bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Get Output id
    var bookmarksResults = document.getElementById('bookmarks-results');

    // Build output
    bookmarksResults.innerHTML = '';
    // Iterate over bookmarks array
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        var date = bookmarks[i].date;

        bookmarksResults.innerHTML += '<div class="well">' +
            '<h3 style="text-transform: capitalize; display: inline-block;">' + name + '</h3>' + '<a style="display: inline-block;margin-left: 10px;" class="btn btn-dark" href="' + url + '" target="_blank">Visit</a>' + '<a style="display: inline-block;margin-left: 10px;" onclick="deleteBookmark(\'' + name + '\',\'' + url + '\')" class="btn btn-danger" href="#">Delete</a><p>' + date + '<P></div>'
    }
}