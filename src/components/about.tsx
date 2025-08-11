
export function About() {
  return (
    <section id="about" className="py-16 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Turning Ideas into Interfaces — Fast, Smart, Beautiful.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="code-block p-6 rounded-xl animate-float">
              <div className="font-mono text-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-muted-foreground ml-2">workflow.js</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div><span className="text-tech-purple">const</span> <span className="text-tech-blue">myWorkflow</span> = {`{`}</div>
                  <div className="ml-4">ideation: <span className="text-tech-green">"rapid prototyping"</span>,</div>
                  <div className="ml-4">tools: [<span className="text-tech-green">"React"</span>, <span className="text-tech-green">"Cursor"</span>, <span className="text-tech-green">"Claude Code"</span>],</div>
                  <div className="ml-4">design: [<span className="text-tech-green">"Figma"</span>, <span className="text-tech-green">"Canva"</span>],</div>
                  <div className="ml-4">ai_integration: [<span className="text-tech-green">"LLMs"</span>, <span className="text-tech-green">"DALL·E"</span>, <span className="text-tech-green">"Midjourney"</span>],</div>
                  <div className="ml-4">deployment: [<span className="text-tech-green">"Netlify"</span>, <span className="text-tech-green">"GitHub"</span>, <span className="text-tech-green">"Replit"</span>],</div>
                  <div className="ml-4">approach: <span className="text-tech-green">"build fast, iterate faster"</span></div>
                  <div>{`};`}</div>
                  <div className="pt-2"></div>
                  <div><span className="text-tech-purple">const</span> <span className="text-tech-blue">buildProject</span> = <span className="text-tech-purple">async</span> (idea) =&gt; {`{`}</div>
                  <div className="ml-4"><span className="text-tech-purple">const</span> prototype = <span className="text-tech-purple">await</span> rapidBuild(idea);</div>
                  <div className="ml-4"><span className="text-tech-purple">const</span> feedback = getUserFeedback(prototype);</div>
                  <div className="ml-4"><span className="text-tech-purple">return</span> iterate(prototype, feedback);</div>
                  <div>{`};`}</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a creative technologist who thrives in the space between raw code and rapid execution.
                With a foundation in React, HTML/CSS, and JS—and powered by tools like Cursor, Replit, Claude Code, and ChatGPT—I build prototypes, streamline workflows, and bring ideas to life fast.
                My projects often blend design (Canva, Figma), AI (LLM's, DALL·E, Midjourney), and code into usable solutions that solve real problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
