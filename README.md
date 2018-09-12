Time ago function for node.js **that actually works**! (translated in Romanian).

Use `timestamp`, `Date Instance`, `iso8601 date` or `any valid parsable date string` as input.

```
const timeAgo = require('node-time-ago-ro');

timeAgo(new Date()); // chiar acum
timeAgo(Date().now()); // chiar acum
timeAgo(new Date().toISOString()); // chiar acum

timeAgo(Date.now() + 35 * 1000); // "acum 35 de secunde"
timeAgo(Date.now() + 65 * 1000); // "acum un minut",
timeAgo(Date.now() + 3 * 60 * 1000); // "acum 3 minute",
timeAgo(Date.now() + 65 * 60 * 1000); // "acum o oră",
timeAgo(Date.now() + 3 * 60 * 60 * 1000); // "acum 3 ore",
timeAgo(Date.now() + 25 * 60 * 60 * 1000); // "acum o zi",
timeAgo(Date.now() + 3 * 24 * 60 * 60 * 1000); // "acum 3 zile",
timeAgo(Date.now() + 35 * 24 * 60 * 60 * 1000); // "acum o lună",
timeAgo(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000); // "acum 3 luni",
timeAgo(Date.now() + 13 * 30 * 24 * 60 * 60 * 1000); // "acum un an",
timeAgo(Date.now() + 3 * 12 * 30 * 24 * 60 * 60 * 1000); // "acum 3 ani"
```
