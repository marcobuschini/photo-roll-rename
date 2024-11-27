/*
 * Photo Roll Rename
 * A tool to keep your rolls organized.
 * 
 * (c) 2024 Marco Buschini <marco.buschini@gmail.com>
 */
import { program } from 'commander'
import { readdirSync, renameSync } from 'fs';

let date: string;
let title: string;
let author: string;
let customer: string|null;
let step: string|null;
let baseName: string;
let source: string;

program
    .argument('<folder>', 'the folder where the photo to rename are')
    .requiredOption('-d --date <date>', 'the date this set has been taken')
    .requiredOption('-t --title <title>', 'the title of this photo set')
    .requiredOption('-a --author <author>', 'the photographer that took this set')
    .option('[c --customer <customer>]', 'the customer this set was for')
    .option('[-s --step <step>]', 'the step of this photo set (if the set had multiple steps)')
    .action((arg: string, opts: any) => {
        source = arg;
        date = opts.date;
        title = opts.title;
        author = opts.author;
        customer = opts.customer;
        step = opts.step;
        if(author === customer || customer === undefined) {
            baseName = '' + date + '_' + author + '_' + title;
        } else {
            baseName = '' + date + '_' + author + '_' + customer + '_' + title;
        }

        if(step) {
            baseName += '_' + step;
        }

        console.info(baseName + ' from ' + arg);

        const files = readdirSync(source);
        let i = 1;
        files.forEach(
            file => {
                const ext = file.split('.')[1];
                const origin = arg + file;
                const destination = arg + baseName + '_' + i.toString().padStart(4, '0') + '.' + ext;
                console.log('mv ' + origin + ' ' + destination);
                renameSync(origin, destination);
                i++;
            }
        );
    });

program.parse();