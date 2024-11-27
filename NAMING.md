# Managing Rolls
## Folder Names
The names of the folders holding photographic files must follow this convention:

```
AAAA-MM-DD_CustomerName_Photographer_SetName
```

Where:
 - AAAA represents the year (4 digits);
 - MM represents the month (2 digits);
 - DD represents the day (2 digits);
 - CustomerName represents the name of the customer (written in PascalCase);
 - Photographer represents the name of the photographer (written in PascalCase, optional, it can be omitted if customer and photographer are the same);
 - SetName represents the name of the work that has been performed (written in PascalCase) with possible further steps separated by an underscore.

## File Names
The names of photographic files must follow this convention:

```
AAAA-MM-DD_CustomerName_Photographer_SetName_NNNN
```

Where:
 - AAAA represents the year (4 digits);
 - MM represents the month (2 digits);
 - DD represents the day (2 digits);
 - CustomerName represents the name of the customer (written in PascalCase);
 - Photographer represents the name of the photographer (written in PascalCase, optional, it can be omitted if customer and photographer are the same);
 - SetName represents the name of the work that has been performed (written in PascalCase) with possible further steps separated by an underscore;
 - NNNN the number of the shot, starting from 0001 (4 digits).

## Jobs in steps
If a job requires more than one step these will be added to SetName with 2 or more digits separated with an underscore character.
For example:

```
AAAA-MM-DD_CustomerName_Photographer_SetName_01/
AAAA-MM-DD_CustomerName_Photographer_SetName_01_NNNN
```

## Photo selection
Once a photo set is complete it is advisable to select the pictures that best fit the purpose of the photo set.
For this reason one more folder might be present with the name `Selected`.
Photo organization in this folder must fulfill the customer's needs.

## Further Organization
One more step in organizing rolls, especially when their production spans months or years, is to build a folder hierarchy where to put the folder described above.
In particular, we suggest creating a folder per year (2019, 2020, 2021, etc.) with, in each, a folder for each month we produced photo sessions (01, 02, 03, etc.).
The photographic folders mentioned above should be put in the latter ones.

## Post processing
In the folders described above we put the RAW files from the camera.
After selecting the pictures we copy there in the `Selected` folder inside the folders described above.
When we are done with post processing we put all the output artifacts in a `Postprocessed` folder inside the `Selected` folder.
As a backup, and documentation, we put an `Instructions` folder inside the `Postprocessed` folder.
This works very well with [Darktable](https://www.darktable.org/) instruction files.

## Denormalization
The structure we described is intentionally denormalized. This is to make it easy to get to the customer, and set from the file name.
In the unfortunate case a file leaves its original folder, we can get the file’s original folder simply by looking at its name.
It is not advisable to insert these data in a database as the database, and the files are not subject to integrity constraint and the database could accidentally become corrupt simply by moving a file in a different folder.

## The rationale
The rationale behind this organization strategy is to view the rolls in shooting order, independently from the moment they are archived on a computer, or even modified.
Furthermore, it is easy to read the name of the customer and the set.
Underscore characters isolate them, and they have no spaces in-between.
It is not even needed (but anyway encouraged) to use specific software tools for photo roll management.
