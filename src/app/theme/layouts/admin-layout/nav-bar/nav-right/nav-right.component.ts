// angular import
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

// project import

// third party

// icon
import { IconService } from '@ant-design/icons-angular';
import {
    BellOutline,
    SettingOutline,
    GiftOutline,
    MessageOutline,
    PhoneOutline,
    CheckCircleOutline,
    LogoutOutline,
    EditOutline,
    UserOutline,
    ProfileOutline,
    WalletOutline,
    QuestionCircleOutline,
    LockOutline,
    CommentOutline,
    UnorderedListOutline,
    ArrowRightOutline,
    GithubOutline
} from '@ant-design/icons-angular/icons';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
    selector: 'app-nav-right',
    standalone: true,
    imports: [SharedModule, RouterModule],
    templateUrl: './nav-right.component.html',
    styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent {
    @Input() styleSelectorToggle!: boolean;
    @Output() Customize = new EventEmitter();
    windowWidth: number;
    screenFull: boolean = true;

    constructor(private iconService: IconService) {
        this.windowWidth = window.innerWidth;
        this.iconService.addIcon(
            ...[
                CheckCircleOutline,
                GiftOutline,
                MessageOutline,
                SettingOutline,
                PhoneOutline,
                LogoutOutline,
                UserOutline,
                EditOutline,
                ProfileOutline,
                QuestionCircleOutline,
                LockOutline,
                CommentOutline,
                UnorderedListOutline,
                ArrowRightOutline,
                BellOutline,
                GithubOutline,
                WalletOutline
            ]
        );
    }

    profile = [
        {
            icon: 'user',
            title: 'Mi cuenta'
        },
        {
            icon: 'car',
            title: 'Reservas disponibles'
        },
    ];
}
