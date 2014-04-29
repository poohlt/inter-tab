#Inter-Tab
A common javascript module that provides a basic interface to pass objects between tabs.

## API

###Constructor
#### Manager():
  Constructor for the inter-tab manager. Each instance should be associated with an active tab. The manger instance will automatically destroy itself when the tab where it was created is closed.
```js
var tab = Manager();
```

### Properties
##### id:
An `id`, a `float` between 0 and 1, is associated with a specific instance of the tab manager to identify each tab. `id` is randomly generated when a manager instance is constructed.

### Methods

##### broadcast(key, value):

  Broadcast a key-value pair to all currently active tabs.

```js
var tab1 = Manager();
var tab2 = Manager();
var tab3 = Manager();

tab1.broadcast("Hello", "World");
// tab2 and tab3 will be notified, 'onBroadcast' handler of tab2 and 3 will be called.
```

##### getTabs():

  Retrive all tabs and their associated key-value pairs. The result is expressed as a javascript object, each key is an id of a tab.
```js
var tab1 = Manager();
var tab2 = Manager();
tab1.getTabs();
/*
{
  "0.00247958698309958": {},
  "0.7932477160356939": {}
}
*/
```

##### send(id, key, value):

  Send a key-value pair to a single tab, specified by the `id` argument.
```js
var tab1 = Manager();
var tab2 = Manager();
var tab3 = Manager();

tab1.send(tab2.id, "Hello", "World");
// Only tab2 will be notified. onMessage method of tab2 will be called.
```

##### set(id, key, value):

  Associate a key-value pair with a specific tab.
```js
var tab1 = Manager();
var tab2 = Manager();

tab1.set(tab2.id, "foo", "bar baz");
// Associate "foo":"bar baz" with tab2.
```

##### get(id, key):

  Retrieve data of `key` for a tab specified by `id`. Returns `undefined` if `id` or `key` doesn't exist.
```js
var tab1 = Manager();
var tab2 = Manager();

tab1.set(tab2.id, "foo", "bar baz");
tab1.get(tab2.id, "foo");
// "bar baz"
tab1.get(tab2.id, "bar");
// undefined
```

### Events and handlers
All events are private at the current stage of development. The only way to access events is through an event handler. Two event handlers are provided by the API:

#### onBroadcast(data):
Called when a tab receieves a broadcast. `data` is the key-value pair in the arguments of `broadcast` method.
```js
tab.onBroadcast = function (event) {
    console.log(event);
};
// Logs the event object from broadcast event to console.
```
#### onMessage(data):
Called when a tab receieves a message. `data` is the key-value pair in the arguments of `message` method.
```js
tab.onMessage = function (event) {
    console.log(event);
};
// Logs the event object from message event to console.
```

## License

MIT