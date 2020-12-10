#  next-router-error

This looks to be an issue with the next router for catch all routes in the dev environment.  It appears to work on a production build but should work consistently between the two.

To see the bug, run the project

```
npm run dev
```

Click on Managed Project List link

Click on Project 111 - Package 222 link

Notice the router update after it retrieves the project but yet the page stays on the old page.  This is due to the queryString params
being present on the asPath property.  If you were to remove those properties then the page functions as expected.