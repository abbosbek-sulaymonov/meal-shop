import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import CategoryLists from './pages/CategoryLists';
import Recipe from './pages/Recipe';
import MealList from './components/MealList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="container content">
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="content" element={<Content />} />
          <Route path="category" element={<Category />}>
            <Route path=":name" element={<CategoryLists />}></Route>
          </Route>
          <Route path="meal" element={<Recipe />}>
            <Route path=":id" element={<MealList />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
