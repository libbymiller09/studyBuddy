import React from 'react';

import Nav from './nav';
import MeetupButton from './meetup-button';
import MeetupLi from './meetup-li';
import CurrentMeetups from './current-meetups';
import AddMeetupButton from './add-meetup-button';
import AddMeetupForm from './add-meetup-form';
import AddMeetupInput from './add-meetup-input';
import AddMeetupLabel from './add-meetup-label';
import Footer from './footer';

export default function MeetupPage(props) {
  return (
    <div>
      <section>
        <h3>Current Scheduled Meetups</h3>
        <div class="meetups-list">
          <li>
            <MeetupLi />
            <MeetupButton />
            <MeetupButton />
          </li>
        </div>
      </section>

      <section>
        <header>
          <h3>Add your own meetup!</h3>
          </header>
          <form class="add-meetup-form">
            <AddMeetupForm />
          </form>
      </section>
    </div>
  );
}