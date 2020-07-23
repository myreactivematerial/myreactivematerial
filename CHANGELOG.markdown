v0.0.2

Added:
- Refresh button on toolbar 
- Reload automatically every 10 seconds using interval and subscription in rxjs
- Add reload spinning indicator (mat spinner)

Known issues:
- Make the interval configurable using environment file.
- Fix ng test to not show the not a known element message

v0.0.1

Added:
- Reverse chronological order sort for Simple article

Known issues:
- Need to refactor the types because the json structure is the same for all drupal json
  field_simple_article_body is not an attribute of drupal attribute
  I should make another class that inherits from drupal attribute
  call it something like drupal simple article attribute which has this property