from library.settings.base import *


# Start customization here

DEBUG = True
ALLOWED_HOSTS = []

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'backend',
        'USER': 'library',
        'PASSWORD': '12345',
        'HOST': 'localhost',
        'PORT': '',
    }
}

WEBPACK_LOADER = {
    'DEFAULT': {
            'BUNDLE_DIR_NAME': 'bundles/',
            'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
        }
}

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(os.path.dirname(BASE_DIR), 'backend')
