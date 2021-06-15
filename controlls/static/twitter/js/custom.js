const root = document.querySelector('body, html');
const container = document.querySelector('.gg-container');
const images = document.querySelectorAll('.gg-box > img');
const l = images.length;
for (var i = 0; i < l; i++) {
  images[i].addEventListener('click', function (h) {
    var f = this;
    const c = f.parentElement,
      a = document.createElement('div');
    a.id = 'gg-screen';
    container.prepend(a);
    if (c.hasAttribute('data-theme')) {
      a.setAttribute('data-theme', 'dark');
    }
    var p = f.src;
    root.style.overflow = 'hidden';
    a.innerHTML =
      '<div class="gg-image"></div><div class="gg-close gg-btn">&times</div><div class="gg-next gg-btn">&rarr;</div><div class="gg-prev gg-btn">&larr;</div>';
    const k = images[0].src,
      q = images[l - 1].src;
    const o = document.querySelector('.gg-image'),
      e = document.querySelector('.gg-prev'),
      b = document.querySelector('.gg-next'),
      r = document.querySelector('.gg-close');
    o.innerHTML = '<img src="' + p + '">';
    if (l > 1) {
      if (p == k) {
        e.hidden = true;
        var n = false;
        var g = f.nextElementSibling;
      } else {
        if (p == q) {
          b.hidden = true;
          var g = false;
          var n = f.previousElementSibling;
        } else {
          var n = f.previousElementSibling;
          var g = f.nextElementSibling;
        }
      }
    } else {
      e.hidden = true;
      b.hidden = true;
    }
    a.addEventListener('click', function (s) {
      if (s.target == this || s.target == r) {
        m();
      }
    });
    root.addEventListener('keydown', function (s) {
      if (s.keyCode == 37 || s.keyCode == 38) {
        d();
      }
      if (s.keyCode == 39 || s.keyCode == 40) {
        j();
      }
      if (s.keyCode == 27) {
        m();
      }
    });
    e.addEventListener('click', d);
    b.addEventListener('click', j);
    function d() {
      n = f.previousElementSibling;
      o.innerHTML = '<img src="' + n.src + '">';
      f = f.previousElementSibling;
      var s = document.querySelector('.gg-image > img').src;
      b.hidden = false;
      e.hidden = s === k;
    }
    function j() {
      g = f.nextElementSibling;
      o.innerHTML = '<img src="' + g.src + '">';
      f = f.nextElementSibling;
      var s = document.querySelector('.gg-image > img').src;
      e.hidden = false;
      b.hidden = s === q;
    }
    function m() {
      root.style.overflow = 'auto';
      a.remove();
    }
  });
}
function gridGallery(a) {
  if (a.selector) {
    selector = document.querySelector(a.selector);
  }
  if (a.darkMode) {
    selector.setAttribute('data-theme', 'dark');
  }
  if (a.layout == 'horizontal' || a.layout == 'square') {
    selector.setAttribute('data-layout', a.layout);
  }
  if (a.gaplength) {
    selector.style.setProperty('--gap-length', a.gaplength + 'px');
  }
  if (a.rowHeight) {
    selector.style.setProperty('--row-height', a.rowHeight + 'px');
  }
  if (a.columnWidth) {
    selector.style.setProperty('--column-width', a.columnWidth + 'px');
  }
}

const MAX_TWEET_LENGTH = 140;
const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function app() {
  return {
    tweetText: '',
    images: [],

    tweets: [
      {
        name: 'John Wick',
        username: '@john1123wick',
        tweet:
          'Build your own Fake Twitter Post now! Check it out @simitator.com',
        retweets: 12,
        likes: 50,
        date: '2020-04-06 12:00:00',
        tweet_images: [],
        hasBeenLiked: false,
        hasBeenRetweeted: false,
      },
      {
        name: 'Captain America',
        username: '@capAmerica',
        tweet:
          'Prank your friends or imitate celebrities. You can make fake twitter tweets in any creative way you like. Upload profile picture, select username, write message...',
        retweets: 10,
        likes: 100,
        date: '2020-04-02',
        tweet_images: [],
        hasBeenLiked: false,
        hasBeenRetweeted: false,
      },
    ],

    followersSuggestions: [
      {
        name: 'ABC Name',
        username: '@hello_abc',
      },
      {
        name: 'CDE Name',
        username: '@hello_cde',
      },
      {
        name: 'XYZ Name',
        username: '@hello_xyz',
      },
    ],

    followings: [
      {
        name: 'PQR Name',
        username: '@hello_pqr',
      },
      {
        name: 'LMNO Name',
        username: '@hello_lmno',
      },
    ],

    follow(username) {
      let getIndexOfSuggestion = this.followersSuggestions.findIndex(
        (f) => f.username === username
      );
      this.followings.push(this.followersSuggestions[getIndexOfSuggestion]);

      // remove from Followers Suggestions array
      this.followersSuggestions.splice(getIndexOfSuggestion, 1);
    },

    unfollow(username) {
      let getIndexOfFollower = this.followings.findIndex(
        (f) => f.username === username
      );
      this.followersSuggestions.push(this.followings[getIndexOfFollower]);

      // remove from followings array
      this.followings.splice(getIndexOfFollower, 1);
    },

    saveTweet() {
      this.tweets.unshift({
        name: 'Current User',
        username: '@current_user',
        tweet: this.tweetText,
        retweets: 0,
        likes: 0,
        date: new Date(),
        tweet_images: this.images,
        hasBeenLiked: false,
        hasBeenRetweeted: false,
      });

      this.images = [];
      this.tweetText = '';
    },

    retweet(index) {
      this.tweets[index].hasBeenRetweeted
        ? this.tweets[index].retweets--
        : this.tweets[index].retweets++;
      this.tweets[index].hasBeenRetweeted =
        !this.tweets[index].hasBeenRetweeted;
    },

    likeTweet(index) {
      this.tweets[index].hasBeenLiked
        ? this.tweets[index].likes--
        : this.tweets[index].likes++;
      this.tweets[index].hasBeenLiked = !this.tweets[index].hasBeenLiked;
    },

    charactersRemaining() {
      return MAX_TWEET_LENGTH - this.tweetText.length;
    },

    tweetIsOutOfRange() {
      return (
        MAX_TWEET_LENGTH - this.tweetText.length == MAX_TWEET_LENGTH ||
        MAX_TWEET_LENGTH - this.tweetText.length < 0
      );
    },

    generateAvatarFromName(name) {
      return (
        name.split(' ')[0].slice(0, 1) + '' + name.split(' ')[1].slice(0, 1)
      );
    },

    formatDate(date) {
      if (!date) {
        return null;
      }

      const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
      const today = new Date();
      const yesterday = new Date(today - DAY_IN_MS);
      const d = new Date(date);
      const day = d.getDate();
      const month = MONTH_NAMES[d.getMonth()];

      const seconds = Math.round((today - d) / 1000);
      const minutes = Math.round(seconds / 60);
      const hours = Math.round(minutes / 60);

      const isToday = today.toDateString() === d.toDateString();
      // const isYesterday = yesterday.toDateString() === date.toDateString();
      // const isThisYear = today.getFullYear() === date.getFullYear();

      if (isToday) {
        if (seconds < 5) {
          return 'now';
        } else if (seconds < 60) {
          return `${seconds}s`;
        } else if (minutes < 60) {
          return `${minutes}m`;
        } else {
          return `${hours}h`;
        }
      } else {
        return month + ' ' + day;
      }
    },
  };
}
