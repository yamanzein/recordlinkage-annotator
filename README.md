# RecordLinkage ANNOTATOR

Our ([Mhd Yaman Al Zein](https://www.linkedin.com/in/yaman-zain-8b7597167/) and [Felix Kruse](https://www.linkedin.com/in/felix-kruse-38437414b/)) fork of the original *RecordLinkage ANNOTATOR* Tool is also a browser-based user interface for
manual labeling of record pairs. Manual labeled or annotated data is useful 
for training and validation models.

## Our change from the original are the following:
1. the application is not a pure React application. It now consists of a React frontend and a Node.js backend.
2. through the backend, intermediate states of labeling tasks can now be saved and exported.
3. in addition, the labeling files are now uploaded and can be managed (accessed and deleted) in a directory structure.
4. we have added statistics that show how many records need to be labeled, how many are already labeled, how many matches have been labeled and how many non-matches have been labeled.

## Try the Tool

At the following link we have hosted the application so you can try it out: [RecordLinkage ANNOTATOR](https://recordannotator.herokuapp.com/) 
In the application there is a file with tuples that can be labeled (button "show files"). We got the file from the following source: https://raw.githubusercontent.com/J535D165/recordlinkage-annotator/master/examples/annotation_dishonesty.json

The hosted version of [*RecordLinkage ANNOTATOR*](https://j535d165.github.io/recordlinkage-annotator/) on [Github-pages](https://pages.github.com/) makes use of client-side Javascript 
only.

## Create annotation file

*RecordLinkage ANNOTATOR* requires an annotation file as input. This JSON file contains your record pairs and defines a comparison schema. The [Python Record Linkage Toolkit](https://github.com/J535D165/recordlinkage) can be used to render such a file. For more information, see the documentation on [Manual Labeling](https://recordlinkage.readthedocs.io/en/latest/annotation.html). 

Version 1 of the schema is open source and can be found [here](/schema). Examples of annotation files can be found in the [examples](/examples) folder. 

## Extract results

*RecordLinkage ANNOTATOR* exports the results of the annotation in an annotation file with the same structure as the input annotation file. This makes it simple to review the annotation or continue labeling the data. The [Python Record Linkage Toolkit](https://github.com/J535D165/recordlinkage) can be used to read the annotation file and extract the links and distinct pairs. For more information, see the documentation on [Manual Labeling](https://recordlinkage.readthedocs.io/en/latest/annotation.html).

## Development

*RecordLinkage ANNOTATOR* is a [React](https://reactjs.org/) application. You can develop or deploy the project locally with `npm start`.

## License 

BSD 3-Clause License
