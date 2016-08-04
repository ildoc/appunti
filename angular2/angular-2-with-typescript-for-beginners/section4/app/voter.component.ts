import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'voter',
    templateUrl: 'app/voter.template.html',
    styles: [`
        .voteSelector {
            cursor: pointer;
        }
        .selectedVote {
            color: #ccc;
        }
    `]
})

export class VoterComponent {
    @Input() totalVotes = 0;
    @Input() userVote = 0;

    @Output() change = new EventEmitter();
    onClick(vote){
        switch(this.userVote)
        {
            case 1:
                if(vote==-1){
                    this.userVote=0;
                    this.totalVotes--;
                }
                else
                    return;
                break;
            case 0:
                this.userVote = vote;
                this.totalVotes+=vote;
                break;
            case -1:
                if(vote==1){
                    this.userVote=0;
                    this.totalVotes++;
                }
                else
                    return;
                break;
        }

        this.change.emit({newValue: vote});
    }
}
