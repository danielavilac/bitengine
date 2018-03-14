function Thread(time_step=1000/60) {
  this.time_step = time_step;
  this.animation_frame = undefined;
  this.render = function() {};
  this.update = function() {};
  this.stats = {
    new_render: 0,
    old_render: 0,
    redraws: 0,
    samples: new Array(),
    sample_index: 0,
    sample_size: 100,
    delta_time: 0,
    updates: 0,

    addSample:function(sample) {
      this.samples[this.sample_index] = sample;
      this.sample_index = (this.sample_index > this.sample_size)?0:this.sample_index + 1;
    },

    getAverageSample:function() {
      var index, sample;
      sample = 0;
      for (index = this.samples.length - 1; index > -1; -- index) {
        sample += this.samples[index];
      }
      return sample/this.samples.length;
    }

  };
}

Thread.prototype.start = function() {
  var accumulated_time, handle, old_time_stamp, updated;
  accumulated_time = this.time_step;
  handle = this;
  old_time_stamp = 0;
  update(0);

  function render(new_time_stamp) {
    handle.stats.old_render = handle.stats.new_render;
    handle.stats.new_render = handle.new_time_stamp;
    handle.stats.redraws ++;
    handle.stats.addSample(handle.stats.new_render - handle.stats.old_render);
    handle.stats.delta_time = (new_time_stamp - old_time_stamp) / 1000;
    handle.render();
  };

  function update(new_time_stamp) {
    // console.log(new_time_stamp);
    accumulated_time += new_time_stamp - old_time_stamp;
    updated = false;
    if (accumulated_time > 300) {
      accumulated_time = handle.time_step;
    }

    while(accumulated_time >= handle.time_step) {
      accumulated_time -= handle.time_step;
      handle.update();
      handle.stats.updates ++;
      updated = true;
    }

    if (updated) {
      render(new_time_stamp);
    }

    old_time_stamp = new_time_stamp;
    handle.animation_frame = window.requestAnimationFrame(update);
  };
};

Thread.prototype.stop = function() {
  window.cancelAnimationFrame(this.animation_frame);
  this.animation_frame = undefined;
};

