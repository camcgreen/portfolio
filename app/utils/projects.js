export const projectDetails = {
  jobstasy: {
    title: 'Jobstasy',
    description: (
      <>
        REMOTE JOB
        <br />
        SEARCH PLATFORM.
      </>
    ),
    hero: '/images/hero-jobstasy.jpg',
    tools: 'React, React Router, Firebase, GitHub Jobs API, GitHub & Figma.',
    summary:
      'Jobstasy is a remote job search platform, created with React, that provides an interface to filter and dig through the GitHub Jobs API. The app also allows you to like jobs to view later.',
    linkProject: 'https://jobstasy.vercel.app/',
    linkRepo: 'https://github.com/camcgreen/jobstasy',
    imageSupp1: '/images/jobstasy-supp-1.jpg',
    goal: (
      <>
        <p>
          I was keen to create an app that leveraged an API and had user
          authentication. I settled on using Firebase for the database as my
          needs were simple and it made authentication straightforward.
        </p>
        <p>
          The project needed to list the jobs from the GitHub Jobs API, using a
          reusable card component system, and to be easily navigated through
          using several different filters.
        </p>
        ,
      </>
    ),
    imageFull1: '/images/jobstasy-full-1.jpg',
    how: (
      <>
        <p>
          The{' '}
          <a
            href='https://github.com/camcgreen/jobstasy/blob/main/src/components/Jobs.js'
            target='_blank'
            rel='noopener noreferrer'
          >
            Jobs.js
          </a>{' '}
          component holds the central jobs state that is pulled from GitHub Jobs
          API. This is then passed down to children components on a need-to-know
          basis.
        </p>
        <p>
          This state is then mapped through and rendered in the{' '}
          <a
            href='https://github.com/camcgreen/jobstasy/blob/main/src/components/JobsList.js'
            target='_blank'
            rel='noopener noreferrer'
          >
            JobList.js
          </a>
          component. Clicking on a job passes that specific job array data from
          the overall jobs object state as props to the{' '}
          <a
            href='https://github.com/camcgreen/jobstasy/blob/main/src/components/JobsList.js'
            target='_blank'
            rel='noopener noreferrer'
          >
            JobDetail.js
          </a>{' '}
          component. This component then renders all the relevant detail (like
          the job title, company name, job description, etc).
        </p>
        <p>
          Liking a job adds it to the LikedJobs arrays of the logged in user in
          the Firestore, which is then fed into the jobs state to render the
          liked jobs list instead of the searched jobs on the{' '}
          <a
            href='https://github.com/camcgreen/jobstasy/blob/main/src/components/JobsList.js'
            target='_blank'
            rel='noopener noreferrer'
          >
            Likes.js
          </a>
          component.
        </p>
      </>
    ),
    imageSupp2: '/images/jobstasy-supp-2.jpg',
    lessons: (
      <>
        <p>
          In the future, for projects like this, I would set up a few endpoints
          on a simple back-end that I could make requests to in order to fetch
          the relevant data from the API, rather than trying to do it all from
          the front-end.
        </p>
        <p>
          This would make the code more manageable as it would be abstracted,
          and it would sidestep any pesky CORS restrictions. I ended up having
          to use a third-party proxy to get around CORS errors, which introduces
          an unnecessary dependency and makes the API responses slower.
        </p>
        <p>Overall, this was a fun project that I learned a lot from.</p>
      </>
    ),
  },
  chatbox: {
    title: 'Chatbox',
    description: (
      <>
        REAL-TIME
        <br />
        CHAT APPLICATION.
      </>
    ),
    hero: '/images/hero-chatbox.jpg',
    tools: 'React, React Router, Firebase, Git & Figma.',
    summary:
      'Chatbox is a real time chat application that can connect you to anyone in the world, complete with online status messages, typing indicators, read receipts and activity timers.',
    linkProject: 'https://chatbox-7b75a.web.app/',
    linkRepo: 'https://github.com/camcgreeen/chatbox',
    imageSupp1: '/images/chatbox-supp-1.jpg',
    goal: (
      <>
        <p>
          I wanted to continue to develop my React skills, while learning
          Firebase to handle the database, in order to build an instant
          messaging app.
        </p>
        <p>
          I knew that Firebase would be perfect for developing this type of
          application because of its live database updates and relatively small
          learning curve.
        </p>
        ,
      </>
    ),
    imageFull1: '/images/chatbox-full-1.jpg',
    how: (
      <>
        <p>
          The application leverages the power of the Firebase onSnapshot method,
          in order to get real-time updates when the database is written to.
          This means that when a message is sent, it is added to the messages
          array within the chat object for those two users.
        </p>
        <p>
          The onSnapshot method then allows us to detect that there has been a
          change to the messages array, which we use to update the local state
          in React of the messages array. This state change cause a re-render of
          the component which then displays the updated chat with almost no
          delay.
        </p>
        <p>
          Authentication is handled by Firebase through the means of some
          convenient methods. Firebase provides some server-side validation so
          only a little application-specific client-side validation is needed.
        </p>
      </>
    ),
    imageSupp2: '/images/chatbox-supp-2.jpg',
    lessons: (
      <>
        <p>
          For future projects of this size, I would set up for test-driven
          development from the start. The project grew in complexity, beyond the
          original idea, and manual testing became unreliable.
        </p>
        <p>
          I would also consider using the React Context API to manage the chat
          state, as there were several different components that needed to read
          and write to this state, and it got quite cumbersome managing state
          with lots of props and callbacks.
        </p>
        <p>
          This was a challenging and rewarding project for me, as I wanted to
          add various features that would make it feel like a real chat
          application.
        </p>
      </>
    ),
  },
}
