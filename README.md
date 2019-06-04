# Project Name

> Project description

## Related Projects

  - https://github.com/hacker-home/Airbnb-info
  - https://github.com/hacker-home/Airbnb-booking
  - https://github.com/hacker-home/Airbnb-reviews
  - https://github.com/hacker-home/Airbnb-more-homes

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```



CRUD API DOCUMENTATION



GET ALL PHOTOS FROM ALL HOME LISTINGS
GET /photos/:listingId

Response:
Status: 200 OK

{ "_id" : ObjectId("5cf6c323ca79884ad987e999"), "listingID" : 1, "listingDesc" : "Error dolorem dolores.", "isSaved" : true, "listingPhotos" : [ { "_id" : ObjectId("5cf6c323ca79884ad987e99f"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/39.jpg", "desc" : "Omnis qui esse.", "isVerified" : false }, { "_id" : ObjectId("5cf6c323ca79884ad987e99e"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/11.jpg", "desc" : "Deleniti rerum ipsum et rem aut ea at.", "isVerified" : true }, { "_id" : ObjectId("5cf6c323ca79884ad987e99d"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/36.jpg", "desc" : "Eaque consequatur assumenda molestiae.", "isVerified" : false }, { "_id" : ObjectId("5cf6c323ca79884ad987e99c"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/18.jpg", "desc" : "Debitis aut quis minima est ipsam.", "isVerified" : false }, { "_id" : ObjectId("5cf6c323ca79884ad987e99b"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/12.jpg", "desc" : "Est cumque explicabo.", "isVerified" : true }, { "_id" : ObjectId("5cf6c323ca79884ad987e99a"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/51.jpg", "desc" : "Harum hic reprehenderit modi odit provident illum.", "isVerified" : true } ], "__v" : 0 }
{ "_id" : ObjectId("5cf6c323ca79884ad987e9a0"), "listingID" : 2, "listingDesc" : "Fugiat voluptatibus quis consequatur voluptates ex qui.", "isSaved" : true, "listingPhotos" : [ { "_id" : ObjectId("5cf6c323ca79884ad987e9a8"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/47.jpg", "desc" : "Odit error quas qui et neque possimus porro quo.", "isVerified" : false }, { "_id" : ObjectId("5cf6c323ca79884ad987e9a7"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/6.jpg", "desc" : "Nam nulla sapiente in.", "isVerified" : true }, { "_id" : ObjectId("5cf6c323ca79884ad987e9a6"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/3.jpg", "desc" : "Optio autem laborum dicta eligendi.", "isVerified" : false }, { "_id" : ObjectId("5cf6c323ca79884ad987e9a5"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/12.jpg", "desc" : "Velit repellendus blanditiis doloribus blanditiis officia recusandae dolore id voluptas.", "isVerified" : true }, { "_id" : ObjectId("5cf6c323ca79884ad987e9a4"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/15.jpg", "desc" : "Architecto maxime saepe aut.", "isVerified" : false }, { "_id" : ObjectId("5cf6c323ca79884ad987e9a3"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/43.jpg", "desc" : "Hic quia expedita sint veritatis ea consequatur.", "isVerified" : false }, { "_id" : ObjectId("5cf6c323ca79884ad987e9a2"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/41.jpg", "desc" : "Laudantium et quod.", "isVerified" : false }, { "_id" : ObjectId("5cf6c323ca79884ad987e9a1"), "url" : "https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/49.jpg", "desc" : "Facere vitae ut facere sapiente sunt consectetur rerum et soluta.", "isVerified" : false } ], "__v" : 0 }


ADD NEW PHOTO LISTING(S) TO DATABASE
POST /photos/

Response:
Status: 200 OK
Your photo listing has been added to the database!

UPDATE PHOTO LISTING IN DATABASE
Update /photos/:listingId

Response: 
Status: 200 OK
Your photo listing has been updated!

DELETE PHOTO LISTING FROM DATABASE
Delete /photos/:listingId

Response: 
Status: 200 OK
Your photo listing has been deleted!

