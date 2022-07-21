import blogsListReducer from './features/blogsfeatures'
import eventsListReducer from './features/eventsfeature'
import galleryListReducer from './features/galleryfeature'
const RootReducer={
    blogs: blogsListReducer,
    events: eventsListReducer,
    gallery: galleryListReducer,
    
}
export default RootReducer;