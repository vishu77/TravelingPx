# TravelingPx

[TravelingPx live][heroku]

[heroku]: https://travelingpx.herokuapp.com/

TravelingPx is a full-stack web application that was modeled after [500px][500px-link]. It utilizes Ruby on Rails, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend. TravelingPx is truly a single-page by utilizing ajax requests to deliver all content on one static page.

[500px-link]: https://500px.com/

## Features
[splashpage]: ./docs/images/splashpage.png

### Photo Rendering and Editing

  On the database side, the photos are stored in one table in the database, which contains columns for `id`, `user_id`, `title`, `description`, `url`, `category` and `updated_at`.  Upon login, an API call is made to the database which joins the user table and the photo table on `user_id` and filters by the current user's `id`.  These notes are held in the `PhotoStore` until the user's session is destroyed.  

  Photos are rendered in two different components: the `CondensedPhotos` components, which show the title and first few words of the note content, and the `enlargedPhoto` components, which are editable and show all note text.  The `PhotoIndex` renders all of the `CondensedPhoto`s as subcomponents, as well as one `enlargedPhoto` component, which renders based on `PhotoStore.selectedNote()`. The UI of the `PhotoIndex` is taken directly from 500px for a professional, clean look:  

![image of notebook index](https://github.com/appacademy/sample-project-proposal/blob/master/docs/noteIndex.png)

Photo editing is implemented using the Quill.js library, allowing for a Word-processor-like user experience.

### Notebooks

Implementing Notebooks started with a notebook table in the database.  The `Notebook` table contains two columns: `title` and `id`.  Additionally, a `notebook_id` column was added to the `Note` table.  

The React component structure for notebooks mirrored that of notes: the `NotebookIndex` component renders a list of `CondensedNotebook`s as subcomponents, along with one `ExpandedNotebook`, kept track of by `NotebookStore.selectedNotebook()`.  

`NotebookIndex` render method:

```javascript
render: function () {
  return ({this.state.notebooks.map(function (notebook) {
    return <CondensedNotebook notebook={notebook} />
  }
  <ExpandedNotebook notebook={this.state.selectedNotebook} />)
}
```

### Tags

As with notebooks, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `tagged_notes` table is the associated join table, which contains three columns: `id`, `tag_id`, and `note_id`.  

Tags are maintained on the frontend in the `TagStore`.  Because creating, editing, and destroying notes can potentially affect `Tag` objects, the `NoteIndex` and the `NotebookIndex` both listen to the `TagStore`.  It was not necessary to create a `Tag` component, as tags are simply rendered as part of the individual `Note` components.  

![tag screenshot](https://github.com/appacademy/sample-project-proposal/blob/master/docs/tagScreenshot.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between FresherNote users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
