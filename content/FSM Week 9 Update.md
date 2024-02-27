```python
# download test point nav dataset
python -m habitat_sim.utils.datasets_download --uids habitat_test_scenes habitat_test_pointnav_dataset
```

Make sure you have the data at the right position, you should find some folders like these: `data/datasets/pointnav/mp3d/v1/`. If not, manually adjust them.


We need some necessary data in the 3D environment. I applied for Matterport 3D [research dataset](https://matterport.com/partners/facebook) which is a largest 3D dataset of indoor spaces.