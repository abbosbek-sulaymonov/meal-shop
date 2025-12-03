import React, { useState } from 'react';
import {
  BookOpen,
  Video,
  FileText,
  ChefHat,
  Clock,
  Users,
  TrendingUp,
  Play,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import classes from './styles/content.module.css';

const Content = () => {
  const [activeTab, setActiveTab] = useState('articles');

  const contentCategories = [
    { id: 'articles', icon: <FileText size={18} />, title: 'Articles', count: '120+' },
    { id: 'videos', icon: <Video size={18} />, title: 'Videos', count: '50+' },
    { id: 'guides', icon: <BookOpen size={18} />, title: 'Guides', count: '30+' },
    { id: 'tips', icon: <ChefHat size={18} />, title: 'Tips', count: '80+' },
  ];

  const articles = [
    {
      title: '10 Essential Cooking Techniques Every Home Chef Should Master',
      category: 'Techniques',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=250&fit=crop',
    },
    {
      title: 'The Ultimate Guide to Meal Prep for Busy Professionals',
      category: 'Meal Prep',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop',
    },
    {
      title: "Understanding Flavor Profiles: A Beginner's Guide",
      category: 'Basics',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=250&fit=crop',
    },
  ];

  const videos = [
    {
      title: 'Perfect Pasta Cooking Masterclass',
      duration: '15:30',
      views: '2.5K',
      thumbnail: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=250&fit=crop',
    },
    {
      title: 'Knife Skills: From Beginner to Pro',
      duration: '22:15',
      views: '5.2K',
      thumbnail: 'https://images.unsplash.com/photo-1593759608142-4c2c0e4d9338?w=400&h=250&fit=crop',
    },
    {
      title: 'Baking Basics: Your First Sourdough',
      duration: '18:45',
      views: '3.8K',
      thumbnail: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=250&fit=crop',
    },
  ];

  const guides = [
    { title: "Beginner's Guide to Cooking", lessons: 15, level: 'Beginner' },
    { title: 'Advanced Baking Techniques', lessons: 20, level: 'Advanced' },
    { title: 'International Cuisine', lessons: 25, level: 'Intermediate' },
  ];

  const tips = [
    { tip: 'Always read the entire recipe before starting to cook', category: 'Preparation' },
    { tip: 'Let meat rest after cooking for juicier results', category: 'Cooking' },
    { tip: 'Season your food in layers throughout the cooking process', category: 'Seasoning' },
    { tip: 'Keep your knives sharp for safer and easier cutting', category: 'Tools' },
    { tip: 'Taste as you cook and adjust seasonings accordingly', category: 'Technique' },
    { tip: 'Use room temperature ingredients for better mixing in baking', category: 'Baking' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'articles':
        return (
          <div className={classes.grid}>
            {articles.map((article, index) => (
              <article key={index} className={classes.card}>
                <div className={classes.cardImg}>
                  <img src={article.image} alt={article.title} />
                  <span className={classes.badge}>{article.category}</span>
                </div>
                <div className={classes.cardBody}>
                  <h3 className={classes.cardTitle}>{article.title}</h3>
                  <div className={classes.cardMeta}>
                    <span>
                      <Clock size={12} /> {article.readTime}
                    </span>
                  </div>
                  <button className={classes.cardBtn}>
                    Read <ExternalLink size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        );

      case 'videos':
        return (
          <div className={classes.grid}>
            {videos.map((video, index) => (
              <article key={index} className={classes.card}>
                <div className={classes.cardImg}>
                  <img src={video.thumbnail} alt={video.title} />
                  <div className={classes.playBtn}>
                    <Play size={24} fill="white" />
                  </div>
                  <span className={classes.duration}>{video.duration}</span>
                </div>
                <div className={classes.cardBody}>
                  <h3 className={classes.cardTitle}>{video.title}</h3>
                  <div className={classes.cardMeta}>
                    <span>
                      <TrendingUp size={12} /> {video.views} views
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        );

      case 'guides':
        return (
          <div className={classes.guidesGrid}>
            {guides.map((guide, index) => (
              <div key={index} className={classes.guideCard}>
                <div className={classes.guideHeader}>
                  <h3 className={classes.guideTitle}>{guide.title}</h3>
                  <span className={`${classes.level} ${classes[guide.level.toLowerCase()]}`}>{guide.level}</span>
                </div>
                <div className={classes.guideMeta}>
                  <span>
                    <BookOpen size={14} /> {guide.lessons} lessons
                  </span>
                </div>
                <button className={classes.guideBtn}>Start Learning</button>
              </div>
            ))}
          </div>
        );

      case 'tips':
        return (
          <div className={classes.tipsGrid}>
            {tips.map((item, index) => (
              <div key={index} className={classes.tipCard}>
                <div className={classes.tipNum}>{index + 1}</div>
                <div>
                  <span className={classes.tipCat}>{item.category}</span>
                  <p className={classes.tipText}>{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={classes.container}>
      {/* Hero */}
      <div className={classes.hero}>
        <h1 className={classes.heroTitle}>Learning Center</h1>
        <p className={classes.heroText}>Master culinary skills with our expert resources</p>
      </div>

      {/* Stats */}
      <div className={classes.stats}>
        <div className={classes.stat}>
          <FileText size={20} />
          <div>
            <strong>280+</strong>
            <span>Resources</span>
          </div>
        </div>
        <div className={classes.stat}>
          <Users size={20} />
          <div>
            <strong>15K+</strong>
            <span>Learners</span>
          </div>
        </div>
        <div className={classes.stat}>
          <Clock size={20} />
          <div>
            <strong>500+</strong>
            <span>Hours</span>
          </div>
        </div>
        <div className={classes.stat}>
          <Sparkles size={20} />
          <div>
            <strong>98%</strong>
            <span>Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={classes.tabs}>
        {contentCategories.map((cat) => (
          <button
            key={cat.id}
            className={`${classes.tab} ${activeTab === cat.id ? classes.tabActive : ''}`}
            onClick={() => setActiveTab(cat.id)}
          >
            {cat.icon}
            <span>{cat.title}</span>
            <span className={classes.tabCount}>{cat.count}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className={classes.content}>{renderContent()}</div>

      {/* Newsletter */}
      <div className={classes.newsletter}>
        <h2>Stay Updated</h2>
        <p>Get weekly tips and recipes in your inbox</p>
        <form className={classes.form}>
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Content;
