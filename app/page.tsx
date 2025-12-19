'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { 
  Shield, 
  Scan, 
  MessageSquare, 
  GitBranch, 
  CheckCircle2, 
  AlertTriangle,
  Zap,
  Github,
  FileText,
  TrendingUp
} from 'lucide-react';

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-textMuted">Loading LicenseFlow...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm text-textMuted">Ship compliant projects in minutes</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-fg to-textMuted bg-clip-text text-transparent">
                Open-Source License
              </span>
              <br />
              <span className="text-accent">Compliance Made Simple</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-textMuted max-w-2xl mx-auto leading-relaxed">
              AI-powered license recommendations, instant dependency scanning, and automated compliance monitoring for developers who ship fast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-8 py-4 bg-primary hover:bg-primaryHover text-white font-semibold rounded-lg transition-all duration-200 shadow-glow hover:shadow-xl flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Talk to AI Advisor
              </button>
              <button className="px-8 py-4 bg-surface hover:bg-surfaceHover text-fg font-semibold rounded-lg transition-all duration-200 border border-border flex items-center justify-center gap-2">
                <Scan className="w-5 h-5" />
                Scan Your First Repo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Licenses Analyzed', value: '50+', icon: Shield },
              { label: 'Avg Scan Time', value: '30s', icon: Zap },
              { label: 'Repos Monitored', value: '1.2K+', icon: GitBranch },
              { label: 'Conflicts Resolved', value: '5K+', icon: CheckCircle2 },
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <div className="flex justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-fg">{stat.value}</div>
                <div className="text-sm text-textMuted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything You Need for License Compliance
            </h2>
            <p className="text-lg text-textMuted max-w-2xl mx-auto">
              From AI-powered recommendations to automated monitoring, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                title: 'AI License Advisor',
                description: 'Get expert recommendations through natural conversation. Understand tradeoffs in plain English.',
                color: 'text-accent',
              },
              {
                icon: Scan,
                title: 'Instant Dependency Scanner',
                description: 'Scan your entire dependency tree in 30 seconds. Detect conflicts automatically.',
                color: 'text-success',
              },
              {
                icon: FileText,
                title: 'Auto-Attribution Generator',
                description: 'Generate compliant LICENSE and NOTICE files in one click. Always up-to-date.',
                color: 'text-warning',
              },
              {
                icon: TrendingUp,
                title: 'Compliance Dashboard',
                description: 'Visual health scores, risk tracking, and investor-ready audit reports.',
                color: 'text-primary',
              },
              {
                icon: Github,
                title: 'GitHub Integration',
                description: 'Automatic weekly scans, PR checks, and Slack alerts for new conflicts.',
                color: 'text-accent',
              },
              {
                icon: Shield,
                title: 'License Comparison',
                description: 'Side-by-side comparison of MIT, Apache, GPL, and more. Filter by use case.',
                color: 'text-success',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-xl bg-surface border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card"
              >
                <div className={`w-12 h-12 rounded-lg bg-bg flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-textMuted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get Compliant in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Your Repo',
                description: 'Paste a GitHub URL or upload your package.json. No account required to start.',
              },
              {
                step: '02',
                title: 'Review Scan Results',
                description: 'See your risk score, dependency licenses, and any conflicts in 30 seconds.',
              },
              {
                step: '03',
                title: 'Generate & Monitor',
                description: 'Download attribution files and enable auto-monitoring to stay compliant.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-accent/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-textMuted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="p-8 rounded-xl bg-warning/10 border border-warning/30">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-warning">
                  Hidden License Conflicts Cost Companies Millions
                </h3>
                <p className="text-textMuted leading-relaxed mb-4">
                  During M&A due diligence, undiscovered GPL dependencies in MIT-licensed projects can delay deals by months or kill them entirely. One Fortune 500 acquisition was reduced by $12M due to license violations.
                </p>
                <p className="text-fg font-medium">
                  Don't let license issues derail your exit. Start scanning today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-textMuted">
              Start free, upgrade as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: 'Free',
                price: '$0',
                features: ['3 scans/month', 'AI advisor (5 chats)', 'Basic reports', 'Community support'],
              },
              {
                name: 'Pro',
                price: '$9',
                features: ['Unlimited scans', 'Priority AI', 'Auto-attribution', 'Email support'],
                popular: true,
              },
              {
                name: 'Team',
                price: '$29',
                features: ['Multi-repo dashboard', 'Compliance reports', 'Slack integration', 'Priority support'],
              },
              {
                name: 'Enterprise',
                price: '$99',
                features: ['Audit reports', 'Custom templates', 'API access', 'Dedicated support'],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`p-6 rounded-xl border ${
                  tier.popular
                    ? 'bg-primary/5 border-primary shadow-glow'
                    : 'bg-surface border-border'
                }`}
              >
                {tier.popular && (
                  <div className="text-xs font-semibold text-primary mb-2">MOST POPULAR</div>
                )}
                <div className="text-2xl font-bold mb-1">{tier.name}</div>
                <div className="text-3xl font-bold mb-4">
                  {tier.price}
                  <span className="text-sm text-textMuted font-normal">/mo</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-textMuted">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    tier.popular
                      ? 'bg-primary hover:bg-primaryHover text-white'
                      : 'bg-surface hover:bg-surfaceHover border border-border'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Ship Compliant Code?
          </h2>
          <p className="text-lg text-textMuted mb-8 max-w-2xl mx-auto">
            Join 1,200+ developers who trust LicenseFlow to keep their projects legally sound.
          </p>
          <button className="px-10 py-5 bg-primary hover:bg-primaryHover text-white text-lg font-semibold rounded-lg transition-all duration-200 shadow-glow hover:shadow-xl">
            Start Your Free Scan
          </button>
          <p className="text-sm text-textMuted mt-4">
            No credit card required • 30-second setup
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-accent" />
                <span className="text-xl font-bold">LicenseFlow</span>
              </div>
              <p className="text-sm text-textMuted">
                Ship compliant open-source projects in minutes, not months.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-textMuted">
                <li>AI Advisor</li>
                <li>Dependency Scanner</li>
                <li>Compliance Dashboard</li>
                <li>GitHub Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-textMuted">
                <li>Documentation</li>
                <li>License Guide</li>
                <li>API Reference</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-textMuted">
                <li>About</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-textMuted">
            © 2024 LicenseFlow. Built on Base. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
