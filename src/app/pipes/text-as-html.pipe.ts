import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'textAsHTML', pure: false })
export class TextAsHTMLPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {

  }

  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}