## Data Model

### Tap
```
{
  id,
  name,
  created_at,
  updated_at,
  deleted_at
}
```

### Beer
```
{
  id,
  tap_id,
  name,
  brewer,
  logo_url,
  style: [
    'AMBER_ALE',
    'AMBER_LAGER',
    'BOCK',
    'BROWN_ALE',
    'DARK_LAGER',
    'IPA',
    'PALE_ALE',
    'PALE_LAGER',
    'PILSNER',
    'PORTER',
    'SOUR_ALE',
    'SPECIALTY_BEER',
    'STOUT',
    'STRONG_ALE',
    'WHEAT_BEER',
    'OTHER',
  ],
  on_tap: true || false,
  start_date,
  end_date,
  created_at,
  updated_at,
  deleted_at
}
```

## API Endpoints

`GET '/api/taps'`: list of all Taps

`POST '/api/taps'`: create a new Tap

`PUT '/api/taps/tap_id'`: update a Tap

`DELETE '/api/taps/tap_id'`: delete a Tap


`GET '/api/beers'`: list of all Beers

`POST '/api/beers'`: create a new Beer

`PUT '/api/beer/beer_id'`: update a Beer

`DELETE '/api/beer/beer_id'`: delete a Beer


#### Feel free to modify, remove, or add endpoints as you see fit!

#### Notes
The `updated_at`, `created_at`, and `deleted_at` data is automatically created by the DB, you do not need to manually add it.
