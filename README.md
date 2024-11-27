# Photo Roll Rename

This is a simple command line application to rename digital photo rolls in batch.
In this document you can find usage instructions for the command.

This tool uses a naming scheme inspired by the one in a National Geographics books on mastering photography, but with substantial changes.
Further information can be found [here](NAMING.md).

## Installation
This is a script, not an app (at the moment, at least).
There are plans to make it a standalone command line tool.
So let's start with cloning the repository.

### Clone the repository
On your bash prompt issue the command:
```
gh repo clone marcobuschini/photo-roll-rename
```

### Build the tool
Move to the directory where the code resides:
```
cd photo-roll-rename
```

Then install all dependencies:
```
npm install
```

Add an alias to confortably use the tool:
```
alias rollrename "npm run rollrename --"
```
The double dash at the end is to forward options to the underlying script.

And finally run the tool to get its usage instructions:
```
rollrename -h
```
