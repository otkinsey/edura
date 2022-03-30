"<h3>Individual Role/Talent</h3><p>Edura in-house experts are not just experts in the Agile development methodology, but we have earned that expertise from decades of experience in multiple software industries. We know individuals like your key contributors because we have also been key contributors. Drawing from deep domain expertise, Edura can assess the capabilities of key individuals within your organization. The core Agile principles of delivering value, openness to change, and improving delivery represent transformative skills and behavior. Our assessments first measures where your key contributors are on an Agile spectrum. In addition, the assessment produces concrete recommendations for help them achieve excellence.</p>";

const pageData = [
  {
    imageUrl: "",
    html: "<h1>Why Assessment?</h1><p>Today, more and more companies are adopting iterative software design methodologies like Agile. Whether you are just starting on this journey or if you already have adopted many agile techniques, it’s vitally important to first understand where you are so you know what you need to do. As we have done for so many other companies, Apex can be your partner in assessing your current capability, to help remediate those areas needing correction, and to create a plan for upgrading skills on your Agile journey.</p><p>While you may find a number of skill surveys online, Edura offers six comprehensive Agile skill assessments to pinpoint your current capabilities. We drew upon our extensive background in software development to create, from scratch, assessments that reflect actual business environments. Following your assessment, Edura will work with you to provide both individualized and customized coaching; Edura complements our customized training with a number of certification-oriented training programs.</p><p>The Edura assessments contain both prescriptive and proscriptive components. We can recognize those patterns and behaviors in your organization that have you on the right track to improving your agility. As experts in agile software development with decades of industry experience in business like yours, we can identify those behaviors that you will want to build upon. Equally important, our experience as developers and leaders within the software industry will allow us to recognize other patterns and behaviors that are detracting from your business and development agility.</p><a href='/contact' class='btn-primary button'>Contact Us</a>",
    imagePosition: "",
  },
  {
    imageUrl: "/images/assessment_page_attachments/Assessment_Leadership.jpg",
    html: "<h3>Leadership Assessment </h3><p>The effectiveness of Agile development efforts will be either magnified or diminished by your organization’s leaders. The Edura leadership assessment quantitatively assesses the skills and capabilities of your leadership team. As outlined in the Agile Manifesto, the following principles are of paramount importance to leaders. First, producing value: does leadership recognize that the production of value over the production of features? Second, encouraging change: does leadership not only welcome change, and not only encourage change, but actually reward change? And third, deliver frequently: does leadership guide the organization to processes conducive to continuous improvement and delivery? Edura’s leadership assessment comprehensively surveys leadership skill in your organization, and it produces recommendations to get leadership on the right track to agility.</p>",
    imagePosition: "right",
  },
  {
    imageUrl: "/images/assessment_page_attachments/Assessment_Organization.jpg",
    html: "<h3>Organization Assessment</h3><p>As important as Agile is to your software development teams, many of the same principles apply to your organization. The Edura Organization Assessment will measure your current capabilities as an Agile organization. We will identify those areas where you are on the right track as well as those where you are following practices that are counterproductive. Like a tried and true family recipe, we have distilled our decades of experience in the software industry to create a comprehensive assessment of software development practices. Among others metrics, we assess the following key capabilities: value: do each your product releases produce recognizable and useful value for the customer; openness to change: are your organizations receptive and encouraging of changing requirements, both early and late in the product cycle; and frequent deliveries via a continuous improvement and delivery pipeline.</p>",
    imagePosition: "left",
  },
  {
    imageUrl: "/images/assessment_page_attachments/Assessment_Portfolio.jpg",
    html: "<h3>Portfolio Assessment</h3><p>Rarely does a company produce a single product or feature that is divorced from other cooperating products. In an organization with multiple and simultaneous development efforts, a siloed approach to product development becomes counterproductive. Do your product teams operate independently or is there a cooperative spirit aligning your goals? Is progress gated by milestones and measured by the number of tasks completed? Many of the same techniques you apply to iterative software development also apply to portfolio management. Our portfolio assessment ascertains where you sit on an Agile spectrum and more importantly, what practices can you adopt that will bring value, openness to change, and improved delivery to your product portfolio.</p>",
    imagePosition: "right",
  },
  {
    imageUrl: "/images/assessment_page_attachments/Assessment_Program.jpg",
    html: "<h3>Program Assessment</h3><p>The Edura program assessment evaluates how well your program development strategy aligns with your product portfolio. In an organization with multiple simultaneous development streams, cooperation and good intentions alone will not produce intended results. Edura measures the engagement of program stakeholders and analyzes strategies for predictability and problem resolution. Edura looks at program planning - is it synchronized with the other programs in your enterprise portfolio? The Edura program assessment measures the propensity of your program to exist cooperatively within the portfolio and deliver value while being open to change.</p>",
    imagePosition: "left",
  },
  {
    imageUrl: "/images/assessment_page_attachments/Assessment_Team.jpg",
    html: "<h3>Team Assessment</h3><p>There are two important considerations. First, there is no perfect team environment. Second, creating an environment where teams can thrive takes a lot of work. The Edura Team Assessment looks at the makeup and dynamics of an individual agile team. We ascertain to what degree has the team jelled or what obstacles may be preventing that from occurring. We look at the team dynamics: how much trust is there between team members? Is there a team culture, and if so, is the culture beneficial to, or detrimental to, the team’s success? Does the team feel empowered to deliver great products? Edura’s decades of experience in Agile organizations allows us to recognize and assess those aspects of teamwork that encourage producing value, being open to change, and allow for continuous improvement and delivery.</p>",
    imagePosition: "right",
  },
  {
    imageUrl: "/images/assessment_page_attachments/Assessment_Individual.jpg",
    html: "<h3>Individual Role/Talent</h3><p>Edura in-house experts are not just experts in the Agile development methodology, but we have earned that expertise from decades of experience in multiple software industries. We know individuals like your key contributors because we have also been key contributors. Drawing from deep domain expertise, Edura can assess the capabilities of key individuals within your organization. The core Agile principles of delivering value, openness to change, and improving delivery represent transformative skills and behavior. Our assessments first measures where your key contributors are on an Agile spectrum. In addition, the assessment produces concrete recommendations for help them achieve excellence.</p>",
    imagePosition: "left",
  },
];

const renderContent = (dataObject) => {
  let content = dataObject.map((contentSection) => {
    let imageOutput = () => {
      if (contentSection.imagePosition === "left") {
        return (
          <div style={{ display: "flex" }}>
            <img
              className="assessment_image"
              src={contentSection.imageUrl}
              alt={contentSection.imageUrl}
              style={{ flex: "50%" }}
            />
            <div
              className="assessment_text"
              style={{
                display: "flex",
                width: "50%",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: contentSection.html }}
              ></div>
            </div>
          </div>
        );
      } else {
        return (
          <div style={{ display: "flex" }}>
            <div
              className="assessment_text"
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: contentSection.html }}
              ></div>
            </div>
            <img
              className="assessment_image"
              src={contentSection.imageUrl}
              alt={contentSection.imageUrl}
              style={{ flex: "50%" }}
            />
          </div>
        );
      }
    };

    return (
      <div>
        {contentSection.imageUrl === "" ? (
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: contentSection.html }}
            ></div>
            <h1>What Are the Different Types of Assessment?</h1>
          </div>
        ) : (
          imageOutput()
        )}
      </div>
    );
  });
  return content;
};

const AssessmentPage = () => {
  return (
    <div id="assessments" style={{ width: "100%" }}>
      <div
        className="jumbotron"
        style={{
          background:
            "center/cover url(/images/assessment_page_attachments/header.jpg)",
        }}
      >
        <h1>Assessments</h1>
      </div>
      <div>{renderContent(pageData)}</div>
    </div>
  );
};

export default AssessmentPage;
