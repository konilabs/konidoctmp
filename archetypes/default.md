+++
title = "Page Title"
linktitle = "Link Title"

publishdate = 2032-09-28T02:13:00Z
expirydate = 2032-09-28T02:13:00Z
date = 2032-09-28T02:13:00Z

draft = true

type = "blogtag"
layout = "index"

tags= []
authors = ["nicolas-perrin"]
blogarchives = "2020/07" // Fill with current month
aliases = []

keywords = []
description = ""

tag_key = ""

slug = ""
url = ""

hide_toc = false
hide_from_menu = false
hide_title = false
force_title = false

menu = "" // "main" or "footer"
weight = 0

source_url= "http://www.free.fr"
source_name = "source"

[[resources]]
  name = "cover"
  src = "discover.jpg"
  title = "my cover title"

[[resources]]
    name = "header"
    src = "images/sunset.jpg"
    title = "Photo Specifications"
    [resources.params]
        icon = "photo"

+++

Introduction text
Do not use # Header1, it is generated from title variable or linktitle if it exists
No header before <!--more--> tag

<!--more-->

Text after

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6
