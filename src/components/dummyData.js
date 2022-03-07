import time from "./upcoming_courses/months";
const courseData = [
  {
    partnerName: "Scrum alliance",
    description: "Certified ScrumMaster",
    instructorName: "Raj Heda",
    what_you_learn:
      "<p>After successfully completing the course, participants will have an  understanding of team roles, events and artifacts. They will be eligible to take CSM test, and  upon passing the test, will be asked to accept the CSM License Agreement and complete their  Scrum Alliance profile. </p> <p>Unlike any other training program, we offer the following bonuses:</p> <li>The highest passing rates: The CSM certification exam is rigorous, but you will be  prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the  unlikely event that you would need to retake the exam, a second trial is free and  additional examinations are discounted.</li> <li>Free follow-up access to your course materials for one year. </li> <li>25% discount on future course fees. Save on courses as you sail through the certification  process.</li> <li>Anytime availability: Your course are available over the Internet 7 days a week and 24  hours a day. Study at any day and time you want. Once you are ready, simply sign up to  take the certification exam! </li> <p>Prerequisites: Highly recommended that participants have 5+ years of experience working in  software development, business analysis, testing, project management, or product management  fields. Experience working in a Scrum environment is also highly desirable. </p>",
    about_this_course:
      "A Certified ScrumMaster® is able to assist a scrum team to perform at their optimum level, as well as buffering the team from distractions. The certification process teaches the Scrum framework and enables CSMs to expand their career opportunities using Agile practices.",
    courseName: "CSM - Certified ScrumMaster",
    price: 1000,
    time: "9:14 PM",
    month: "june",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: 2,
    location: "Boston, MA, USA",
    instructorImage:
      "images/course_details_images/EDA-75_attachments/Raj_Heda.png",
    start_date: "June 10, 2022 ",
    end_date: "June 11, 2022",
    partner_image:
      "images/course_details_images/EDA-75_attachments/scrum_alliance.png",
    review_images:
      "images/course_details_images/EDA-75_attachments/CSM_Review_1.jpg,images/course_details_images/EDA-75_attachments/CSM_Review_2.jpg,images/course_details_images/EDA-75_attachments/CSM_Review_3.jpg,images/course_details_images/EDA-75_attachments/CSM_Review_4.jpg",
    header_background_image:
      "images/course_details_images/EDA-75_attachments/CSM_Header.jpg",
    cert_image: "images/course_details_images/EDA-75_attachments/CSM.png",
  },
  {
    partnerName: "Kwideo",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    instructorName: "Raj Heda",
    what_you_learn:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    courseName:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    price: 1000,
    time: "2:20 PM",
    month: "test",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: "2",
    location:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    instructorImage:
      "https://robohash.org/pariaturnecessitatibuset.jpg?size=80x80&set=set1",
    date: "9/21/2021",
    about_this_course: "all about this course",
  },
  {
    partnerName: "Yacero",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    instructorName: "Raj Heda",
    what_you_learn:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    courseName:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    price: 1000,
    time: "2:59 PM",
    month: "test",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: "2",
    location:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    instructorImage:
      "https://robohash.org/etametmolestiae.jpg?size=80x80&set=set1",
    date: "6/7/2021",
    about_this_course: "all about this course",
  },
  {
    partnerName: "Browsedrive",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    instructorName: "Raj Heda",
    what_you_learn:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    courseName:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    price: 1000,
    time: "5:45 AM",
    month: "test",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: "2",
    location:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    instructorImage:
      "https://robohash.org/sedomnisfugit.jpg?size=80x80&set=set1",
    date: "4/22/2021",
    about_this_course: "all about this course",
  },
  {
    partnerName: "Voomm",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    instructorName: "Alys Coryndon",
    what_you_learn:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    courseName:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    price: 1000,
    time: "9:55 AM",
    month: "test",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: "2",
    location:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    instructorImage:
      "https://robohash.org/laborevoluptatibusaut.jpg?size=80x80&set=set1",
    date: "10/9/2021",
    about_this_course: "all about this course",
  },
  {
    partnerName: "Jetwire",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    instructorName: "Alys Coryndon",
    what_you_learn:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    courseName:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    price: 1000,
    time: "4:23 PM",
    month: "test",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: "2",
    location:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    instructorImage:
      "https://robohash.org/omnisametnobis.jpg?size=80x80&set=set1",
    date: "5/8/2021",
    about_this_course: "all about this course",
  },
  {
    partnerName: "Leenti",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    instructorName: "Alys Coryndon",
    what_you_learn:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    courseName:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    price: 1000,
    time: "12:51 PM",
    month: "test",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: "2",
    location:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    instructorImage:
      "https://robohash.org/rerumdoloret.jpg?size=80x80&set=set1",
    date: "11/20/2021",
    about_this_course: "all about this course",
  },
  {
    partnerName: "Zoomdog",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    instructorName: "Claribel Drewell",
    what_you_learn:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    courseName:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    price: 1000,
    time: "3:23 PM",
    month: "test",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: "2",
    location:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    instructorImage:
      "https://robohash.org/placeatcumdolorum.jpg?size=80x80&set=set1",
    date: "10/1/2021",
    about_this_course: "all about this course",
  },
  {
    partnerName: "Gabcube",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    instructorName: "Claribel Drewell",
    what_you_learn:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    courseName:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    price: 1000,
    time: "6:47 AM",
    month: "test",
    instructor_bio:
      "Raj Heda has been teaching software development and Agile courses for  over 20 years. He has extensive experience leading teams in Agile transformation, with  successful results. Raj currently teaches in the Boston area at Boston University and  Brandeis University.",
    effort_duration: "2",
    location:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    instructorImage:
      "https://robohash.org/nulladucimusmagni.jpg?size=80x80&set=set1",
    date: "11/19/2021",
    about_this_course: "all about this course",
  },
];

export default courseData;
